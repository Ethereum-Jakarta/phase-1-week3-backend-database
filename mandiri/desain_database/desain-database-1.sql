CREATE TABLE "employee" (
  "id_karyawan" integer,
  "nama_karyawan" varchar,
  "jabatan" varchar,
  "no_telepon" varchar,
  "alamat" varchar
);

CREATE TABLE "employee_absence" (
  "id_absensi" integer,
  "id_karyawan" integer,
  "tanggal_hadir" date,
  "waktu_masuk" time,
  "waktu_keluar" time,
  "status_kehadiran" varchar
);

CREATE TABLE "task" (
  "id_task" integer,
  "id_karyawan" integer,
  "nama_tugas" varchar,
  "status_tugas" varchar,
  "deadline" date
);

CREATE TABLE "project" (
  "id_project" integer,
  "nama_project" varchar,
  "id_manajer" integer
);

CREATE TABLE "member_project" (
  "id_project" integer,
  "id_member" integer
);

CREATE TABLE "production_project" (
  "id_pengeluaran" integer,
  "id_project" integer,
  "id_karyawan" integer,
  "jumlah_pengeluaran" integer,
  "keterangan" varchar
);

CREATE TABLE "profit_project" (
  "id_keuntungan" integer,
  "id_project" integer UNIQUE,
  "total_pendapatan" integer,
  "total_pengeluaran" integer,
  "jumlah_keuntungan" integer
);

ALTER TABLE "employee_absence" ADD FOREIGN KEY ("id_karyawan") REFERENCES "employee" ("id_karyawan");

ALTER TABLE "task" ADD FOREIGN KEY ("id_karyawan") REFERENCES "employee" ("id_karyawan");

ALTER TABLE "project" ADD FOREIGN KEY ("id_manajer") REFERENCES "employee" ("id_karyawan");

ALTER TABLE "production_project" ADD FOREIGN KEY ("id_project") REFERENCES "project" ("id_project");

ALTER TABLE "production_project" ADD FOREIGN KEY ("id_karyawan") REFERENCES "employee" ("id_karyawan");

ALTER TABLE "profit_project" ADD FOREIGN KEY ("id_project") REFERENCES "project" ("id_project");

ALTER TABLE "member_project" ADD FOREIGN KEY ("id_project") REFERENCES "project" ("id_project");

ALTER TABLE "member_project" ADD FOREIGN KEY ("id_member") REFERENCES "employee" ("id_karyawan");
