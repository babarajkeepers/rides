const Pool = require('pg').Pool
const pool = new Pool({
    user: 'dbmasteruser',
    host: 'ls-d9fb2e072c439a1c6582965ad26b39d4f266e4ed.c3yvkbm6kcsc.us-east-1.rds.amazonaws.com',
    database: 'postgres',
    password: 'babarajkeepers',
    port: 5432,
})

const getAllStudents = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getAllStudentsByUniversity = (request, response) => {
    const university = request.params.university

    pool.query('SELECT * FROM users where university_name = $1 ORDER BY id ASC', [university], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getAllDriversByUniversity = (request, response) => {
    const university = request.params.university

    pool.query('SELECT * FROM users where university_name = $1 and isDriver = $2 ORDER BY id ASC', [university, true], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}


const getAllUniversities = (request, response) => {
    pool.query('SELECT * FROM university ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAllStudents,
    getAllUniversities,
    getAllStudentsByUniversity,
    getAllDriversByUniversity
}