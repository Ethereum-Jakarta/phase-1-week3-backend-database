-- buat tabel
CREATE TABLE `company_database`.`karyawan` (
  `id_` INT NOT NULL,
  `nama_karyawan` VARCHAR(45) NOT NULL,
  `jabatan` VARCHAR(20) NOT NULL,
  `tugas` VARCHAR(200) NULL,
  PRIMARY KEY (`id_`)
  INDEX `nama_kar_idx` (`nama_karyawan` ASC) VISIBLE);

CREATE TABLE `company_database`.`absensi_karyawan` (
  `id_absens` INT NOT NULL,
  `id_karyawan` INT NULL,
  `tanggal` DATE NULL,
  `jam_datang` TIME NOT NULL,
  `jam_pulang` TIME NULL,
  PRIMARY KEY (`id_absens`),
  INDEX `id_karyawan_idx` (`id_karyawan` ASC) VISIBLE,
  CONSTRAINT `id_karyawan`
    FOREIGN KEY (`id_karyawan`)
    REFERENCES `company_database`.`karyawan` (`id_`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `company_database`.`project_details` (
  `id_project` INT NOT NULL,
  `nama_project` VARCHAR(45) NOT NULL,
  `deadline_project` DATE NOT NULL,
  `nilai_project` INT NULL,
  `status` VARCHAR(45) NULL,
  PRIMARY KEY (`id_project`)
  INDEX `nama_project_idx` (`nama_project` ASC) VISIBLE);

CREATE TABLE `company_database`.`project_list` (
  `id_list` INT NOT NULL,
  `id_project` INT NOT NULL,
  `id_karyawan` INT NULL,
  `pengeluaran` INT NULL,
  `tugas_project` VARCHAR(200) NULL,
  PRIMARY KEY (`id_list`),
  INDEX `id_project_idx` (`id_project` ASC) VISIBLE,
  INDEX `id_kar_idx` (`id_karyawan` ASC) VISIBLE,
  CONSTRAINT `id_project`
    FOREIGN KEY (`id_project`)
    REFERENCES `company_database`.`project_details` (`id_project`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_kar_idx`
  FOREIGN KEY (`id_karyawan`)
  REFERENCES `company_database`.`karyawan` (`id_`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION);

-- hanya manajer yang bisa mengakses ke dalam detail project
GRANT SELECT ON project_details TO role_manajer;

-- menghitung pengeluaran untuk menentukan bayaran dari karyawan
SELECT project_details.id_project, project_details.nilai_project, SUM(project_list.pengeluaran) AS Pengeluaran
FROM project_details
JOIN project_list ON project_details.id_project = project_list.id_project
GROUP BY project_details.id_project;

-- menghitung keuntungan dari tiap project
SELECT project_details.id_project, (project_details.nilai_project - SUM(project_list.pengeluaran)) AS Profit
FROM project_details
JOIN project_list ON project_details.id_project = project_list.id_project
GROUP BY project_details.id_project;