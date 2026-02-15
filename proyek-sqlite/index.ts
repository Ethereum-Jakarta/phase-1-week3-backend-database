// Maaf tidak memakai package standar entah kenapa di bun sqlite3 selalu membuat runtimenya panic;
import { Database } from "bun:sqlite";

const db = new Database("database_karyawan.db");

function createTables() {
  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS Karyawan
      (
        IDKaryawan INTEGER PRIMARY KEY,
        Nama TEXT NOT NULL,
        Usia INTEGER,
        Jabatan TEXT
      );
      
      CREATE TABLE IF NOT EXISTS Proyek
      (
        IDProyek INTEGER PRIMARY KEY,
        NamaProyek TEXT NOT NULL,
        IDKaryawanPenanggung INTEGER,
        FOREIGN KEY (IDKaryawanPenanggung) REFERENCES Karyawan (IDKaryawan)
      );

      CREATE TABLE IF NOT EXISTS Pekerjaan
      (
        IDPekerjaan INTEGER PRIMARY KEY,
        NamaPekerjaan TEXT NOT NULL,
        IDProyek INTEGER,
        IDKaryawan INTEGER,
        FOREIGN KEY (IDProyek) REFERENCES Proyek (IDProyek),
        FOREIGN KEY (IDKaryawan) REFERENCES Karyawan (IDKaryawan)
      );
    `);
    console.log("Tabel berhasil dibuat");
  } catch (e) {
    console.error("Gagal membuat table: ", (e as Error).message);
  }
}

function insertData() {
  try {
    db.exec('BEGIN'); // Memulai transaksi

    db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)', ['John Doe', 30, 'Manager']);
    db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)', ['Jane Smith', 25, 'Programmer']);
    db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)', ['Bob Johnson', 35, 'Sales']);
    db.run('INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)', ['Alice Brown', 28, 'Designer']);

    db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)', ['Proyek A', 2]);
    db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)', ['Proyek B', 4]);
    db.run('INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)', ['Proyek C', 1]);

    db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 1', 101, 2]);
    db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 2', 101, 2]);
    db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 3', 101, 4]);
    db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 4', 102, 4]);
    db.run('INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)', ['Pekerjaan 5', 103, 1]);

    db.exec('COMMIT'); // Menyelesaikan transaksi

    console.log('Data berhasil dimasukkan.');
  } catch (error) {
    db.exec('ROLLBACK'); // Membatalkan transaksi jika terjadi kesalahan
    console.error('Gagal memasukkan data:', (error as Error).message);
  }
}

function displayData() {
  try {
    const karyawanRows = db.query('SELECT * FROM Karyawan').all();
    console.log('Data Karyawan:');
    console.table(karyawanRows);

    const proyekRows = db.query('SELECT * FROM Proyek').all();
    console.log('Data Proyek:');
    console.table(proyekRows);

    const pekerjaanRows = db.query('SELECT * FROM Pekerjaan').all();
    console.log('Data Pekerjaan:');
    console.table(pekerjaanRows);
  } catch (error) {
    console.error('Gagal mengambil data:', (error as Error).message);
  }
}

function closeDatabase() {
  try {
    db.close();
    console.log('Koneksi ke database ditutup.');
  } catch (error) {
    console.error('Gagal menutup koneksi:', (error as Error).message);
  }
}

void createTables();
void insertData();
void displayData();
void closeDatabase();
