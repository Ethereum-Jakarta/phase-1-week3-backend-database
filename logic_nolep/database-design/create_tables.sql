CREATE TABLE employee (
    id_employee INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    id_role INTEGER,
    salary_per_project NUMERIC(10, 2),
    CONSTRAINT fk_id_role
        FOREIGN KEY(id_role)
        REFERENCES role(id_role)
        ON DELETE CASCADE
);

CREATE TABLE role (
    id_role INTEGER PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL
);

CREATE TABLE project (
    id_project INTEGER PRIMARY KEY,
    project_name VARCHAR(50),
    budget NUMERIC(10, 2),
    revenue NUMERIC(10, 2),
    id_manager INTEGER,
    CONSTRAINT fk_id_manager
        FOREIGN KEY(id_manager)
        REFERENCES employee(id_employee)
        ON DELETE CASCADE
);

CREATE TABLE project_members (
    id_project INTEGER,
    id_employee INTEGER,
    PRIMARY KEY (id_project, id_employee),
    CONSTRAINT fk_id_project
        FOREIGN KEY(id_project)
        REFERENCES project(id_project)
        ON DELETE CASCADE,
    CONSTRAINT fk_id_employee
        FOREIGN KEY(id_employee)
        REFERENCES employee(id_employee)
        ON DELETE CASCADE
);

CREATE TABLE task (
    id_task INTEGER PRIMARY KEY,
    task_name VARCHAR(50),
    status VARCHAR(50),
    id_employee INTEGER,
    id_project INTEGER,
    CONSTRAINT fk_id_employee
        FOREIGN KEY(id_employee)
        REFERENCES employee(id_employee)
        ON DELETE CASCADE,
    CONSTRAINT fk_id_project
        FOREIGN KEY(id_project)
        REFERENCES project(id_project)
        ON DELETE CASCADE
);

CREATE TABLE presence (
    id_presence INTEGER PRIMARY KEY,
    id_employee INTEGER,
    date date,
    entry_time time,
    clock_out time,
    CONSTRAINT fk_id_employee
        FOREIGN KEY(id_employee)
        REFERENCES employee(id_employee)
        ON DELETE CASCADE
);