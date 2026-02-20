SELECT SUM(salary_per_project) AS total_pengeluaran FROM employee
INNER JOIN project_members pm ON employee.id_employee = pm.id_employee
WHERE pm.id_project = 1;

SELECT revenue - (
            SELECT SUM(salary_per_project) AS total_pengeluaran FROM employee
            INNER JOIN project_members pm ON employee.id_employee = pm.id_employee
            WHERE pm.id_project = 1
        ) AS profit 
FROM project
WHERE id_project = 1;

SELECT name FROM employee
INNER JOIN project_members pm ON employee.id_employee = pm.id_employee
WHERE pm.id_project = 1;

SELECT e.name, p.date, p.entry_time, p.clock_out FROM employee e
INNER JOIN presence p ON e.id_employee = p.id_employee;

SELECT e.name, t.task_name, t.status FROM task t
INNER JOIN employee e ON t.id_employee = e.id_employee;