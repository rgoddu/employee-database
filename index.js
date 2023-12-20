const inquirer = require(`inquirer`);
const db =
(() => {
    inquirer.prompt({
        name: `input`,
        type: `list`,
        message: `What would you like to do?`,
        choices: [
            { name: `view all departments`, value: `viewDepartments` },
            { name: `view all roles`, value: `viewRoles` },
            { name: `view all employees`, value: `viewEmployees` },
            { name: `add a department`, value: `addDepartment` },
            { name: `add a a role`, value: `addRole` },
            { name: `add an employee`, value: `addEmployee` },
            { name: `update an employee role`, value: `updateEmployee` }]
    })
    .then((answers) => {
        console.log(answers);
        if (answers.value === `viewDepartments`) {

        }
    })
})()

function viewDepartments() {

}