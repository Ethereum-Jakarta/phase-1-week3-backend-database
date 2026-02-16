-- ============================
-- TABEL WORKER (KARYAWAN)
-- ============================
CREATE TABLE worker (
    worker_id      SERIAL PRIMARY KEY,
    name           VARCHAR(100) NOT NULL,
    role           VARCHAR(50) NOT NULL,      -- contoh: Manager, Programmer, QA
    daily_rate     INT NOT NULL,               -- gaji per hari
    is_manager     BOOLEAN NOT NULL DEFAULT FALSE
);

-- ============================
-- TABEL PROJECT
-- ============================
CREATE TABLE project (
    project_id     SERIAL PRIMARY KEY,
    project_name   VARCHAR(150) NOT NULL,
    manager_id     INT NOT NULL REFERENCES worker(worker_id),
    budget         INT NOT NULL,               -- dana yang disediakan
    revenue        INT DEFAULT 0,              -- pendapatan hasil project
    status         VARCHAR(20) NOT NULL        -- contoh: ongoing, done, cancelled
);

-- ============================
-- TABEL PROJECT_MEMBER
-- (N:N RELATION)
-- ============================
CREATE TABLE project_member (
    project_id     INT REFERENCES project(project_id),
    worker_id      INT REFERENCES worker(worker_id),
    role_in_project VARCHAR(100),
    PRIMARY KEY (project_id, worker_id)
);

-- ============================
-- TABEL TASK
-- ============================
CREATE TABLE task (
    task_id        SERIAL PRIMARY KEY,
    project_id     INT REFERENCES project(project_id),
    worker_id      INT REFERENCES worker(worker_id),
    title          VARCHAR(200) NOT NULL,
    description    TEXT,
    status         VARCHAR(20) NOT NULL,    -- todo / doing / done
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ============================
-- TABEL ATTENDANCE (ABSENSI)
-- ============================
CREATE TABLE attendance (
    attendance_id  SERIAL PRIMARY KEY,
    worker_id      INT REFERENCES worker(worker_id),
    work_date      DATE NOT NULL,
    hours_worked   INT NOT NULL,
    status         VARCHAR(20) NOT NULL      -- present / sick / off
);

-- ============================
-- TABEL PROJECT_COST
-- (pengeluaran untuk project)
-- ============================
CREATE TABLE project_cost (
    cost_id        SERIAL PRIMARY KEY,
    project_id     INT REFERENCES project(project_id),
    worker_id      INT REFERENCES worker(worker_id),
    work_date      DATE NOT NULL,
    hours_paid     INT NOT NULL,
    cost_amount    INT NOT NULL             -- daily_rate * jam kerja atau fixed
);
