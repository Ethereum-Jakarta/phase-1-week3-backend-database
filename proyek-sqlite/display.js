const db = require("./index");

async function displayData() {
  try {
    const karyawanRows = await db.all("SELECT * FROM Karyawan");
    console.log("Data Karyawan:");
    console.table(karyawanRows);

    const proyekRows = await db.all("SELECT * FROM Proyek");
    console.log("Data Proyek:");
    console.table(proyekRows);

    const pekerjaanRows = await db.all("SELECT * FROM Pekerjaan");
    console.log("Data Pekerjaan:");
    console.table(pekerjaanRows);
  } catch (error) {
    console.error("Gagal mengambil data:", error.message);
  }
}

// Panggil fungsi displayData untuk menampilkan data dari tabel
displayData();
