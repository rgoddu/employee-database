USE employee_db;
INSERT INTO department(name) 
VALUES
    ('EHS'),
    ('EnGR'),
    ('clowns')
;
INSERT INTO role(title, salary, department_id) 
VALUES
    ('manager', 299, 1),
    ('engineer', 2924, 2),
    ('village-idiot', 23, 3)
;
INSERT INTO employee( first_name, last_name, role_id, manager_id) 
VALUES
    ('remi', 'goddu', 1, 1),
    ('manav', 'patel', 2, 1),
    ('samir', 'ahmed', 3, 1)
;
-- INSERT INTO  table_name (  ) VALUES(
--      your_values
-- );