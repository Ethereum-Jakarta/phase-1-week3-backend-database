// Gunakan library `sqlite` yang berbasis Promise
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

// Fungsi utama (IIFE)
(async () => {
    const db = await open({
        filename: 'database_karyawan.db',
        driver: sqlite3.Database
    });

    try {
        await db.exec('PRAGMA foreign_keys = ON;');

        // Buat tabel
        await db.exec(`
      CREATE TABLE IF NOT EXISTS Karyawan (
        IDKaryawan INTEGER PRIMARY KEY AUTOINCREMENT,
        Nama TEXT NOT NULL,
        Usia INTEGER,
        Jabatan TEXT
      );
    `);

        await db.exec(`
      CREATE TABLE IF NOT EXISTS Proyek (
        IDProyek INTEGER PRIMARY KEY AUTOINCREMENT,
        NamaProyek TEXT NOT NULL,
        IDKaryawanPenanggung INTEGER,
        FOREIGN KEY (IDKaryawanPenanggung) REFERENCES Karyawan(IDKaryawan)
      );
    `);

        await db.exec(`
      CREATE TABLE IF NOT EXISTS Pekerjaan (
        IDPekerjaan INTEGER PRIMARY KEY AUTOINCREMENT,
        NamaPekerjaan TEXT NOT NULL,
        IDProyek INTEGER,
        IDKaryawan INTEGER,
        FOREIGN KEY (IDProyek) REFERENCES Proyek(IDProyek),
        FOREIGN KEY (IDKaryawan) REFERENCES Karyawan(IDKaryawan)
      );
    `);

        // Masukkan data
        await db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)', ['John Doe', 30, 'Manager']);
        await db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)', ['Jane Smith', 25, 'Programmer']);
        await db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)', ['Bob Johnson', 35, 'Sales']);
        await db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)', ['Alice Brown', 28, 'Designer']);

        await db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)', ['Proyek A', 2]);
        await db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)', ['Proyek B', 4]);
        await db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)', ['Proyek C', 1]);

        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 1', 1, 2]);
        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 2', 1, 2]);
        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 3', 1, 4]);
        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 4', 2, 4]);
        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 5', 3, 1]);

        // Tampilkan data
        console.log('\nData Karyawan:');
        console.table(await db.all('SELECT * FROM Karyawan'));

        console.log('\nData Proyek:');
        console.table(await db.all('SELECT * FROM Proyek'));

        console.log('\nData Pekerjaan:');
        console.table(await db.all('SELECT * FROM Pekerjaan'));

    } catch (err) {
        console.error('Terjadi kesalahan:', err.message);
    } finally {
        await db.close();
        console.log('\nKoneksi ke database ditutup.');
    }
})();
