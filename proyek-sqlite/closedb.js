const db = require("./index");


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