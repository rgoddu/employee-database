const inquirer = require(`inquirer`);
const EmployeeDatabase = require("./lib")

const employeeDb = new EmployeeDatabase()

const startCLI = () => {
    inquirer.prompt({
        name: `input`,
        type: `list`,
        message: `What would you like to do?`,
        choices: [
            {
                name: `view all departments`, value: `viewDepartments`
            },
            { name: `view all roles`, value: `viewRoles` },
            { name: `view all employees`, value: `viewEmployees` },
            { name: `add a department`, value: `addDepartment` },
            { name: `add a a role`, value: `addRole` },
            { name: `add an employee`, value: `addEmployee` },
            { name: `update an employee role`, value: `updateEmployee` }]
    })
        .then((answers) => {
            console.log(answers);
            switch (answers.value) {
                case "viewDepartments":
                    employeeDb.getAllDepartments()
                        .then(result => {
                            console.log('\n')
                            console.table(result.rows)

                        })
                        .then(() => startCLI())
                        .catch(err => console.error(err))
                    break;
                case "viewRoles":
                    employeeDb.getAllRoles()
                        .then(result => {
                            console.log('\n')
                            console.table(result.rows)
                        })
                        .then(() => startCLI())
                        .catch(err => console.error(err))
                    break
                default:
                    process.exitCode = 1
                    process.exit()
            }
            // if (answers.value === `viewDepartments`) {
            // }
        })
}


function init() {
    console.log(employeeDb.db)
    console.log(employeeDb.getAllRoles().then((res)=> {
        console.log(res)
    }))
    startCLI()

}
init()