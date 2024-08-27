const inquirer = require('inquirer');
const EmployeeDatabase = require('./lib');

const employeeDb = new EmployeeDatabase();

const startCLI = () => {
    inquirer.prompt({
        name: 'input',
        type: 'list',
        message: 'What would you like to do?',
        choices: [
            { name: 'View all departments', value: 'viewDepartments' },
            { name: 'View all roles', value: 'viewRoles' },
            { name: 'View all employees', value: 'viewEmployees' },
            { name: 'Add a department', value: 'addDepartment' },
            { name: 'Add a role', value: 'addRole' },
            { name: 'Add an employee', value: 'addEmployee' },
            { name: 'Update an employee role', value: 'updateEmployee' }
        ]
    })
        .then((answers) => {
            switch (answers.input) {
                case 'viewDepartments':
                    employeeDb.getAllDepartments()
                        .then(result => {
                            console.log(result);
                        })
                        .catch(err => console.error('Error fetching departments:', err))
                    break;
                case 'viewRoles':
                    employeeDb.getAllRoles()
                        .then(result => {
                            console.log('\n');
                            console.table(result);
                        })
                        .catch(err => console.error('Error fetching roles:', err))
                    break;
                case 'viewEmployees':
                    employeeDb.getAllEmployees()
                        .then(result => {
                            console.log('\n');
                            console.table(result);
                        })
                        .catch(err => console.error('Error fetching employees:', err))
                    break;
                case 'addDepartment':
                    // Add implementation for adding a department
                    break;
                case 'addRole':
                    // Add implementation for adding a role
                    break;
                case 'addEmployee':
                    // Add implementation for adding an employee
                    break;
                case 'updateEmployee':
                    // Add implementation for updating an employee role
                    break;
                default:
                    console.log('Invalid selection');
                    process.exit(1); // Exit with an error code
            }
            // process.exit(0)
        })
        .catch(err => console.error('Error processing input:', err));
};

function init() {
    console.log('Initializing...');
    startCLI()
}

init();
