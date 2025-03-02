Enter password: 
/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.8.0-MariaDB, for Android (aarch64)
--
-- Host: localhost    Database: DESIGN
-- ------------------------------------------------------
-- Server version	11.8.0-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Dumping data for table `Absensi`
--

LOCK TABLES `Absensi` WRITE;
/*!40000 ALTER TABLE `Absensi` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Absensi` VALUES
(1,2,'2025-03-01','Hadir'),
(2,3,'2025-03-01','Izin'),
(3,4,'2025-03-01','Sakit'),
(4,2,'2025-03-02','Hadir'),
(5,3,'2025-03-02','Hadir'),
(6,4,'2025-03-02','Hadir');
/*!40000 ALTER TABLE `Absensi` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Dumping data for table `Karyawan`
--

LOCK TABLES `Karyawan` WRITE;
/*!40000 ALTER TABLE `Karyawan` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Karyawan` VALUES
(1,'Budi Santoso','Manager',15000000.00),
(2,'Siti Aminah','Karyawan',7000000.00),
(3,'Rudi Hartono','Karyawan',8000000.00),
(4,'Dewi Lestari','Karyawan',7500000.00);
/*!40000 ALTER TABLE `Karyawan` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Dumping data for table `Keuntungan`
--

LOCK TABLES `Keuntungan` WRITE;
/*!40000 ALTER TABLE `Keuntungan` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Keuntungan` VALUES
(1,1,20000000.00),
(2,2,25000000.00);
/*!40000 ALTER TABLE `Keuntungan` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Dumping data for table `Pengeluaran`
--

LOCK TABLES `Pengeluaran` WRITE;
/*!40000 ALTER TABLE `Pengeluaran` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Pengeluaran` VALUES
(1,1,5000000.00),
(2,1,3000000.00),
(3,2,6000000.00),
(4,2,2500000.00);
/*!40000 ALTER TABLE `Pengeluaran` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Dumping data for table `Project`
--

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `Project` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Project` VALUES
(1,'Proyek A','2025-01-01','2025-06-30',1),
(2,'Proyek B','2025-02-01','2025-07-30',1);
/*!40000 ALTER TABLE `Project` ENABLE KEYS */;
UNLOCK TABLES;
commit;

--
-- Dumping data for table `Tugas`
--

LOCK TABLES `Tugas` WRITE;
/*!40000 ALTER TABLE `Tugas` DISABLE KEYS */;
set autocommit=0;
INSERT INTO `Tugas` VALUES
(1,'Mengerjakan frontend website',2,1),
(2,'Mengerjakan backend website',3,1),
(3,'Menulis dokumentasi proyek',4,1),
(4,'Mengembangkan fitur AI',2,2),
(5,'Menguji keamanan sistem',3,2);
/*!40000 ALTER TABLE `Tugas` ENABLE KEYS */;
UNLOCK TABLES;
commit;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2025-03-01 18:50:06
