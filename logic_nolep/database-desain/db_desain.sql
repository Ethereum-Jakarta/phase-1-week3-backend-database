-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jan 20, 2025 at 08:54 AM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_desain`
--

-- --------------------------------------------------------

--
-- Table structure for table `absensi`
--

CREATE TABLE `absensi` (
  `ID_Absensi` int NOT NULL,
  `ID_Karyawan` int DEFAULT NULL,
  `Tanggal` date DEFAULT NULL,
  `Status` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `absensi`
--

INSERT INTO `absensi` (`ID_Absensi`, `ID_Karyawan`, `Tanggal`, `Status`) VALUES
(1, 1, '2025-01-20', 'Hadir'),
(2, 2, '2025-01-20', 'Hadir'),
(3, 3, '2025-01-20', 'Tidak Hadir'),
(4, 4, '2025-01-20', 'Hadir'),
(5, 5, '2025-01-20', 'Cuti'),
(6, 6, '2025-01-20', 'Hadir');

-- --------------------------------------------------------

--
-- Table structure for table `anggota_proyek`
--

CREATE TABLE `anggota_proyek` (
  `ID_Proyek` int NOT NULL,
  `ID_Karyawan` int NOT NULL,
  `Peran` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `anggota_proyek`
--

INSERT INTO `anggota_proyek` (`ID_Proyek`, `ID_Karyawan`, `Peran`) VALUES
(1, 1, 'Manager'),
(1, 2, 'Anggota'),
(1, 3, 'Anggota'),
(2, 4, 'Manager'),
(2, 5, 'Anggota'),
(3, 1, 'Manager'),
(3, 6, 'Anggota');

-- --------------------------------------------------------

--
-- Table structure for table `karyawan`
--

CREATE TABLE `karyawan` (
  `ID_Karyawan` int NOT NULL,
  `Nama` varchar(100) DEFAULT NULL,
  `Jabatan` varchar(50) DEFAULT NULL,
  `Tanggal_Masuk` date DEFAULT NULL,
  `Gaji` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `karyawan`
--

INSERT INTO `karyawan` (`ID_Karyawan`, `Nama`, `Jabatan`, `Tanggal_Masuk`, `Gaji`) VALUES
(1, 'Asep Hidayat', 'Manager', '2020-03-01', '8000000.00'),
(2, 'Budi Santoso', 'Anggota', '2021-06-15', '4000000.00'),
(3, 'Citra Dewi', 'Anggota', '2022-01-10', '4500000.00'),
(4, 'Dewi Sulastri', 'Manager', '2019-09-20', '8500000.00'),
(5, 'Eko Prabowo', 'Anggota', '2021-05-05', '4200000.00'),
(6, 'Fina Lestari', 'Anggota', '2023-02-10', '4600000.00');

-- --------------------------------------------------------

--
-- Table structure for table `pengeluaran_proyek`
--

CREATE TABLE `pengeluaran_proyek` (
  `ID_Pengeluaran` int NOT NULL,
  `ID_Proyek` int DEFAULT NULL,
  `ID_Karyawan` int DEFAULT NULL,
  `Jumlah` decimal(15,2) DEFAULT NULL,
  `Tanggal_Pengeluaran` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `pengeluaran_proyek`
--

INSERT INTO `pengeluaran_proyek` (`ID_Pengeluaran`, `ID_Proyek`, `ID_Karyawan`, `Jumlah`, `Tanggal_Pengeluaran`) VALUES
(1, 1, 1, '5000000.00', '2025-01-15'),
(2, 1, 1, '3000000.00', '2025-01-18'),
(3, 2, 4, '4000000.00', '2025-02-01'),
(4, 3, 1, '6000000.00', '2025-02-05'),
(5, 2, 4, '3500000.00', '2025-02-10'),
(6, 3, 1, '7000000.00', '2025-02-12');

-- --------------------------------------------------------

--
-- Table structure for table `proyek`
--

CREATE TABLE `proyek` (
  `ID_Proyek` int NOT NULL,
  `Nama_Proyek` varchar(100) DEFAULT NULL,
  `Tanggal_Mulai` date DEFAULT NULL,
  `Tanggal_Selesai` date DEFAULT NULL,
  `Total_Biaya` decimal(15,2) DEFAULT NULL,
  `Keuntungan` decimal(15,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `proyek`
--

INSERT INTO `proyek` (`ID_Proyek`, `Nama_Proyek`, `Tanggal_Mulai`, `Tanggal_Selesai`, `Total_Biaya`, `Keuntungan`) VALUES
(1, 'Proyek A', '2025-01-01', '2025-06-30', '50000000.00', '20000000.00'),
(2, 'Proyek B', '2024-11-15', '2025-03-15', '30000000.00', '10000000.00'),
(3, 'Proyek C', '2025-02-01', '2025-08-30', '70000000.00', '25000000.00');

-- --------------------------------------------------------

--
-- Table structure for table `tugas`
--

CREATE TABLE `tugas` (
  `ID_Tugas` int NOT NULL,
  `ID_Karyawan` int DEFAULT NULL,
  `Deskripsi_Tugas` text,
  `Tanggal_Pelaksanaan` date DEFAULT NULL,
  `Status_Tugas` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tugas`
--

INSERT INTO `tugas` (`ID_Tugas`, `ID_Karyawan`, `Deskripsi_Tugas`, `Tanggal_Pelaksanaan`, `Status_Tugas`) VALUES
(1, 1, 'Menyelesaikan laporan bulanan', '2025-01-20', 'Selesai'),
(2, 2, 'Mengumpulkan data penjualan', '2025-01-20', 'Belum Selesai'),
(3, 3, 'Menganalisis pasar untuk proyek baru', '2025-01-20', 'Belum Selesai'),
(4, 4, 'Mengatur jadwal pertemuan dengan klien', '2025-01-20', 'Selesai'),
(5, 5, 'Membuat presentasi untuk rapat proyek', '2025-01-20', 'Selesai'),
(6, 6, 'Mengelola administrasi proyek', '2025-01-20', 'Belum Selesai');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `absensi`
--
ALTER TABLE `absensi`
  ADD PRIMARY KEY (`ID_Absensi`),
  ADD KEY `ID_Karyawan` (`ID_Karyawan`);

--
-- Indexes for table `anggota_proyek`
--
ALTER TABLE `anggota_proyek`
  ADD PRIMARY KEY (`ID_Proyek`,`ID_Karyawan`),
  ADD KEY `ID_Karyawan` (`ID_Karyawan`);

--
-- Indexes for table `karyawan`
--
ALTER TABLE `karyawan`
  ADD PRIMARY KEY (`ID_Karyawan`);

--
-- Indexes for table `pengeluaran_proyek`
--
ALTER TABLE `pengeluaran_proyek`
  ADD PRIMARY KEY (`ID_Pengeluaran`),
  ADD KEY `ID_Proyek` (`ID_Proyek`),
  ADD KEY `ID_Karyawan` (`ID_Karyawan`);

--
-- Indexes for table `proyek`
--
ALTER TABLE `proyek`
  ADD PRIMARY KEY (`ID_Proyek`);

--
-- Indexes for table `tugas`
--
ALTER TABLE `tugas`
  ADD PRIMARY KEY (`ID_Tugas`),
  ADD KEY `ID_Karyawan` (`ID_Karyawan`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `absensi`
--
ALTER TABLE `absensi`
  ADD CONSTRAINT `absensi_ibfk_1` FOREIGN KEY (`ID_Karyawan`) REFERENCES `karyawan` (`ID_Karyawan`);

--
-- Constraints for table `anggota_proyek`
--
ALTER TABLE `anggota_proyek`
  ADD CONSTRAINT `anggota_proyek_ibfk_1` FOREIGN KEY (`ID_Proyek`) REFERENCES `proyek` (`ID_Proyek`),
  ADD CONSTRAINT `anggota_proyek_ibfk_2` FOREIGN KEY (`ID_Karyawan`) REFERENCES `karyawan` (`ID_Karyawan`);

--
-- Constraints for table `pengeluaran_proyek`
--
ALTER TABLE `pengeluaran_proyek`
  ADD CONSTRAINT `pengeluaran_proyek_ibfk_1` FOREIGN KEY (`ID_Proyek`) REFERENCES `proyek` (`ID_Proyek`),
  ADD CONSTRAINT `pengeluaran_proyek_ibfk_2` FOREIGN KEY (`ID_Karyawan`) REFERENCES `karyawan` (`ID_Karyawan`);

--
-- Constraints for table `tugas`
--
ALTER TABLE `tugas`
  ADD CONSTRAINT `tugas_ibfk_1` FOREIGN KEY (`ID_Karyawan`) REFERENCES `karyawan` (`ID_Karyawan`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
