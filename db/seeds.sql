INSERT INTO department(id, name) 
VALUES(
    (1, 'EHS'),
    (2, 'EnGR'),
    (3, 'clowns'),
);
INSERT INTO role(id, title, salary, department_id) VALUES(
    (1, 'manager', 299, 1)
    (2, 'engineer', 2924, 2)
    (3, 'village-idiot', 23, 3)
);
INSERT INTO employee(id, first_name, last_name, role_id, manager_id) VALUES(
    (1, 'remi', 'goddu', 1, 1)
    (2, 'manav', 'patel', 2, 1)
    (3, 'samir', 'ahmed', 3, 1)
);
-- INSERT INTO  table_name (  ) VALUES(
--      your_values
-- );