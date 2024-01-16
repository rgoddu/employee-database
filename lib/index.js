const db = require("../config")
var Table = require('cli-table')

class EmployeeDatabase {
    constructor(name = "employee_db", db) {
        this.name = name;
        this.db = db;
    }

    getAllDepartments() {
        return this.db.promise().query('SELECT * FROM department;')
        .then((response) => {
        const table = new Table(response)
        console.table(response)
        return response;
        })
    }

    getAllRoles() {
        return this.db.promise().query('SELECT * FROM role;')
        // .then(response => console.table(response))
    }

    getAllEmployees() {
        this.db.promise().query('SELECT * FROM employee;')
            .then(response => console.table(response))
    }

    getEmployeesByDepartment() {
        this.db.promise().query('SELECT * FROM employee JOIN department ON empl;')
            .then(response => console.table(response))
    }

    getAllRoles() {
        this.db.promise().query("SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;")
            .then(response => console.table(response))
    }

    insertNewDepartment(deptName = `new_department`) {
        this.db.promise().query('INSERT INTO department (name) VALUES (?)', [deptName]
        );
    }

    insertNewRole(roleName = `new_role`, roleSalary = 'new_salary', roleDepartment = 'new_department_id') {
        this.db.promise().query('INSERT INTO role (title) VALUES (?)', [roleName]
        );
    }

    updateRole(updatedRole = `updated_role`, employeeID) {
        this.db.promise().query('UPDATE employee SET role_id = (?) WHERE id = (?)', [updatedRole, employeeID]
        ).then((response) => console.table(response));
    }
}

module.exports = EmployeeDatabase
