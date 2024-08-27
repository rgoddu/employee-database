const db = require("../config")

class EmployeeDatabase {
    constructor(name = "employee_db") {
        this.name = name;
        this.db = db;
    }

    getAllDepartments() {
        return this.db.promise().query('SELECT * FROM department;')
            .then(([response]) => {
                return response
            })
            .catch(err => {
                console.error('error fetching departments', err)
                throw err
            })
    }

    getAllRoles() {
        return this.db.promise().query('SELECT * FROM role;')
            .then(([response]) => {
                console.table(response)
                return response
            })
            .catch(err => {
                console.error('error fetching departments', err)
                throw err
            })
    }

    getAllEmployees() {
        return this.db.promise().query('SELECT * FROM employee;')
            .then(([response]) => console.table(response))
            .catch(err => {
                console.error('error fetching departments', err)
                throw err
            })
    }

    getAllRoles() {
        return this.db
            .promise()
            .query(
                "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department ON role.department_id = department.id;")
            .then(response => console.table(response[0]))
    }

    getAllEmployees() {
        this.db.promise().query(
            'SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, role.salary AS salary, department.name AS department FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON role.department_id = department.id;'
        )
            .then(response => console.table(response[0]))
    }

    getOneRole(id, salary) {
        this.db.promise().query(' SELECT * FROM role WHERE id = (?) AND salary = (?)', [id, salary]).then(response => console.log(response[0]))
    }
    insertNewDepartment(deptName = `new_department`) {
        this.db.promise().query('INSERT INTO department (name) VALUES (?)', [deptName]
        );
    }

    insertNewRole(roleName = `new_role`, roleSalary = 0, roleDepartment = 'new_department_id') {
        this.db.promise().query('INSERT INTO role (title) VALUES (?)', [roleName]
        );
    }

    updateRole(updatedRole = `updated_role`, employeeID) {
        this.db.promise().query('UPDATE employee SET role_id = (?) WHERE id = (?)', [updatedRole, employeeID]
        ).then((response) => console.table(response));
    }
}


const test = new EmployeeDatabase()
// test.getAllDepartments()
// test.getAllRoles()
// test.getAllEmployees()
// test.getOneRole(1, '29')
module.exports = EmployeeDatabase