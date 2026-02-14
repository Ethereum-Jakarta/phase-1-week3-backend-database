const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database_karyawan.db');


//membuat tabel
async function createTables() {
    try {
        await db.exec(`
            CREATE TABLE IF NOT EXISTS Karyawan (
                IDKaryawan INTEGER PRIMARY KEY,
                Nama TEXT NOT NULL,
                Usia INTEGER,
                Jabatan TEXT
            );
        `);

        await db.exec(`
            CREATE TABLE IF NOT EXISTS Proyek (
                IDProyek INTEGER PRIMARY KEY,
                NamaProyek TEXT NOT NULL,
                IDKaryawanPenanggung INTEGER,
                FOREIGN KEY (IDKaryawanPenanggung) REFERENCES Karyawan (IDKaryawan)
            );
        `);

        await db.exec(`
                CREATE TABLE IF NOT EXISTS Pekerjaan (
                IDPekerjaan INTEGER PRIMARY KEY,
                NamaPekerjaan TEXT NOT NULL,
                IDProyek INTEGER,
                IDKaryawan INTEGER,
                FOREIGN KEY (IDProyek) REFERENCES Proyek (IDProyek),
                FOREIGN KEY (IDKaryawan) REFERENCES Karyawan (IDKaryawan)
            );
        `);

        console.log('Tabel berhasil dibuat')
    } catch (error) {
        console.error('Gagal membuat tabel:', error.message)
    }
}

// createTables();

//menambahkan data ke tabel
async function insertData() {
    try {
        await db.exec("BEGIN"); //memulai transaksi

        await db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?,?,?)', ['John Doe', 30, 'Manager']);
        await db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?,?,?)', ['Jane Smith', 25, 'Programmer']);
        await db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?,?,?)', ['Bob Johnson', 28, 'Sales']);
        await db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?,?,?)', ['Alice Brown', 28, 'Designer']);

        await db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?,?)', ['Proyek A', 2]);
        await db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?,?)', ['Proyek B', 4]);
        await db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?,?)', ['Proyek C', 1]);

        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES(?,?,?)', ['Pekerjaan 1', 101, 2]);
        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES(?,?,?)', ['Pekerjaan 2', 101, 2]);
        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES(?,?,?)', ['Pekerjaan 3', 101, 4]);
        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES(?,?,?)', ['Pekerjaan 4', 102, 4]);
        await db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES(?,?,?)', ['Pekerjaan 5', 103, 1]);

        await db.exec('COMMIT'); //menyelesaikan transaksi

        console.log('Data berhasil dimasukkan')
    } catch (error) {
        await db.exec('ROLLBACK') //membatalkan transaksi jika terjadi kesalahan
        console.error('Gagal memasukkan data:', error.message)
    }
}

//panggil fungsi insertData untuk menambahkan data ke tabel
// insertData();

//mengambil dan menampilkan data dari tabel
async  function displayData() {
    try {
        const karyawanRows = await db.all('SELECT * FROM Karyawan');
        console.log('Data Karyawan:')
        console.table(karyawanRows);

        const proyekRows = await db.all('SELECT * FROM Proyek');
        console.log('Data Proyek:');
        console.table(proyekRows);

        const pekerjaanRows = await db.all('SELECT * FROM Pekerjaan');
        console.log('Data Pekerjaan:');
        console.table(pekerjaanRows);
    } catch(error) {
        console.error("Gagal mengambil data:", error.message)
    }
}

//panggil fungsi displayData untuk mengampilkan data dari tabel
// displayData();

//menutup koneksi database
async function closeDatabase() {
    try {
        await db.close();
        console.log('Koneksi ke database ditutup')
    } catch (error) {
        console.error("Gagal menutup koneksi:", error.message)
    }
}

//panggil fungsi closeDatabase untuk menutup koneksi ke database
// closeDatabase()

async function main() {
    await createTables();
    await insertData();
    await displayData();
    await closeDatabase();
}

main()