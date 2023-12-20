const mysql = require("mysql2")

const db = mysql.createConnection("mysql://root:root@localhost:3306/employee_db")
console.log(db)


module.exports = db