const db = require("../config")

class EmployeeDatabase {
    constructor(name = "employee_db") {
        this.name = name;
        this.db = db;
    }

    getAllDepartments() {
        this.db.promise().query('SELECT * FROM department;').then((response) => {
            console.log(response)
        })
    }

    insertNewDepartment(deptName = `new_department`) {
        this.db.promise().query('INSERT INTO department (name) VALUES (?)', [deptName]
        );
    }

    updateRole(updatedRole = `updated_role`, employeeID) {
        this.db.promise().query('UPDATE employee SET role_id = (?) WHERE id = (?)', [updatedRole, employeeID]
        );
    }


}

const test = new EmployeeDatabase()

console.log(test.getAllDepartments())