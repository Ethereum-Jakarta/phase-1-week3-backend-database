CREATE TABLE Karyawan(
    id_karyawan INT PRIMARY KEY,
    nama_karyawan VARCHAR(50) NOT NULL,
    jabatan VARCHAR(50) NOT NULL,
    no_telepon VARCHAR(16) NOT NULL,
    alamat VARCHAR(100)
)

CREATE TABLE Absensi_karyawan (
    id_absensi INT PRIMARY KEY,
    id_karyawan VARCHAR(50) NOT NULL,
    tanggal_hadir DATE NOT NULL,
    waktu_masuk TIME NOT NULL,
    waktu_keluar TIME NOT NULL,
    status_kehadiran VARCHAR(30)
    FOREIGN KEY(id_karyawan) REFERENCES Karyawan(id_karyawan)
)

CREATE TABLE Project(
    id_project INT PRIMARY KEY,
    nama_project VARCHAR(50) NOT NULL,
    id_manajer INT NOT NULL
    FOREIGN KEY(id_manager) REFERENCES Karyawan(id_karyawan)
)

CREATE TABLE Tugas(
    id_tugas INT PRIMARY KEY,
    id_project INT NOT NULL,
    id_karyawan INT NOT NULL,
    nama_tugas VARCHAR(50) NOT NULL,
    status_tugas VARCHAR(30) NOT NULL,
    deadline DATE
    FOREIGN KEY(id_project) REFERENCES Project(id_project)
    FOREIGN KEY(id_karyawan) REFERENCES Karyawan(id_karyawan)
)

CREATE TABLE Member_project(
    id_project INT PRIMARY KEY,
    id_member INT NOT NULL
)

CREATE TABLE Keuntungan_project(
    id_keuntungan INT PRIMARY KEY,
    id_project INT NOT NULL,
    total_pendapatan INT NOT NULL,
    total_pengeluaran INT NOT NULL,
    jumlah_keuntungan INT NOT NULL
)

CREATE TABLE Pengeluaran_project(
    id_pengeluaran INT PRIMARY KEY,
    id_project INT NOT NULL,
    id_karyawan INT NOT NULL,
    jumlah_pengeluaran INT NOT NULL,
    keterangan VARCHAR(200)
)