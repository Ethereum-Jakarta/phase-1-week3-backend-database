INSERT INTO role(id_role, role_name)
VALUES
    (1, 'Manager'),
    (2, 'Developer');

INSERT INTO employee(id_employee, name, id_role, salary_per_project)
VALUES
    (101, 'Budi', 1, 5000000),
    (102, 'Ani', 2, 2000000),
    (103, 'Iwan', 2, 2500000);

INSERT INTO project(id_project, project_name, budget, revenue, id_manager)
VALUES
    (1, 'Aplikasi Kucing Pintar', 20000000, 25000000, 101);

INSERT INTO project_members(id_project, id_employee)
VALUES
    (1, 101),
    (1, 102),
    (1, 103);

INSERT INTO task(id_task, task_name, status, id_employee, id_project)
VALUES 
    (1, 'Create Front-End', 'On Progress', 101, 1),
    (2, 'Create Back-End', 'On Progress', 102, 1),
    (3, 'Create UI/UX', 'On Progress', 103, 1);

INSERT INTO presence(id_presence, id_employee, date, entry_time, clock_out)
VALUES
    (1, 101, '2026-03-03', '08:15:00', '16:58:00'),
    (2, 102, '2026-05-03', '08:07:00', '17:00:00'),
    (3, 103, '2026-07-03', '08:23:00', '17:07:00');