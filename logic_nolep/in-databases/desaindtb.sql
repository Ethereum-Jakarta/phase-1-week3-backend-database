CREATE TABLE Karyawan (
    karyawan_id INT PRIMARY KEY,
    nama VARCHAR(100),
    jabatan VARCHAR(50),
    gaji DECIMAL(10, 2)
);

CREATE TABLE Absensi (
    absensi_id INT PRIMARY KEY,
    karyawan_id INT,
    tanggal DATE,
    status ENUM('Hadir', 'Tidak Hadir'),
    FOREIGN KEY (karyawan_id) REFERENCES Karyawan(karyawan_id)
);

CREATE TABLE Proyek (
    proyek_id INT PRIMARY KEY,
    nama_proyek VARCHAR(100),
    manajer_id INT,
    anggaran DECIMAL(10, 2),
    pendapatan DECIMAL(10, 2),
    FOREIGN KEY (manajer_id) REFERENCES Karyawan(karyawan_id)
);

CREATE TABLE Tugas (
    tugas_id INT PRIMARY KEY,
    proyek_id INT,
    karyawan_id INT,
    deskripsi TEXT,
    status ENUM('Tertunda', 'Sedang Berlangsung', 'Selesai'),
    FOREIGN KEY (proyek_id) REFERENCES Proyek(proyek_id),
    FOREIGN KEY (karyawan_id) REFERENCES Karyawan(karyawan_id)
);

CREATE TABLE AnggotaProyek (
    anggota_proyek_id INT PRIMARY KEY,
    proyek_id INT,
    karyawan_id INT,
    FOREIGN KEY (proyek_id) REFERENCES Proyek(proyek_id),
    FOREIGN KEY (karyawan_id) REFERENCES Karyawan(karyawan_id)
);

CREATE INDEX idx_karyawan_nama ON Karyawan(nama);
CREATE INDEX idx_proyek_nama ON Proyek(nama_proyek);
CREATE INDEX idx_tugas_status ON Tugas(status);

GRANT SELECT, INSERT, UPDATE ON Karyawan TO role_karyawan;
GRANT SELECT, INSERT, UPDATE ON Proyek TO role_manajer;

















































