const Pool = require('pg').Pool
const pool = new Pool({
    user: 'dbmasteruser',
    host: 'ls-d9fb2e072c439a1c6582965ad26b39d4f266e4ed.c3yvkbm6kcsc.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: '',
    port: 5432,
})

const getStudents = (request, response) => {
    response.send("No students yet in db")
}


module.exports = {
    getStudents
}