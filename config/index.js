const mysql = require("mysql2")
require('dotenv').config()

const db = mysql.createConnection(`mysql://root:root@localhost:3306/employee_db`)
// db.pr
module.exports = db