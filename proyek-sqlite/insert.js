const db = require("./index");

async function insertData() {
  try {
    await db.exec("BEGIN"); // Memulai transaksi

    await db.run(
      "INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)",
      ["John Doe", 30, "Manager"]
    );
    await db.run(
      "INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)",
      ["Jane Smith", 25, "Programmer"]
    );
    await db.run(
      "INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)",
      ["Bob Johnson", 35, "Sales"]
    );
    await db.run(
      "INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)",
      ["Alice Brown", 28, "Designer"]
    );

    await db.run(
        "INSERT INTO Karyawan (Nama, Usia, Jabatan) VALUES (?, ?, ?)",
        ["Alice Keys", 29, "Web Developer"]
      );

    await db.run(
      "INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)",
      ["Proyek A", 2]
    );
    await db.run(
      "INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)",
      ["Proyek B", 4]
    );
    await db.run(
      "INSERT INTO Proyek (NamaProyek, IDKaryawanPenanggung) VALUES (?, ?)",
      ["Proyek C", 1]
    );

    await db.run(
      "INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)",
      ["Pekerjaan 1", 101, 2]
    );
    await db.run(
      "INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)",
      ["Pekerjaan 2", 101, 2]
    );
    await db.run(
      "INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)",
      ["Pekerjaan 3", 101, 4]
    );
    await db.run(
      "INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)",
      ["Pekerjaan 4", 102, 4]
    );
    await db.run(
      "INSERT INTO Pekerjaan (NamaPekerjaan, IDProyek, IDKaryawan) VALUES (?, ?, ?)",
      ["Pekerjaan 5", 103, 1]
    );

    await db.exec("COMMIT"); // Menyelesaikan transaksi

    console.log("Data berhasil dimasukkan.");
  } catch (error) {
    await db.exec("ROLLBACK"); // Membatalkan transaksi jika terjadi kesalahan
    console.error("Gagal memasukkan data:", error.message);
  }
}

// Panggil fungsi insertData untuk menambahkan data ke tabel
insertData();
