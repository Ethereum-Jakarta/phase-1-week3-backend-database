const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database_karyawan.db');
async function displayData() {
    try {
      const karyawanRows = await db.all('SELECT * FROM Karyawan');
      console.log('Data Karyawan:');
      console.table(karyawanRows);
  
      const proyekRows = await db.all('SELECT * FROM Proyek');
      console.log('Data Proyek:');
      console.table(proyekRows);
  
      const pekerjaanRows = await db.all('SELECT * FROM Pekerjaan');
      console.log('Data Pekerjaan:');
      console.table(pekerjaanRows);
    } catch (error) {
      console.error('Gagal mengambil data:', error.message);
    }
  }
  
  // Panggil fungsi displayData untuk menampilkan data dari tabel
  displayData();
  async function closeDatabase() {
    try {
      await db.close();
      console.log('Koneksi ke database ditutup.');
    } catch (error) {
      console.error('Gagal menutup koneksi:', error.message);
    }
  }
  
  // Panggil fungsi closeDatabase untuk menutup koneksi ke database
  closeDatabase();