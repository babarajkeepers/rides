const express = require('express')
const bodyParser = require('body-parser')
const db = require('./src/queries/queries')
const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ 'Welcome Note': 'Welcome to the API of rides app' })
})

app.get('/students', db.getAllStudents())
app.get('/universities', db.getAllUniversities())
app.get('/students/:university', db.getAllStudentsByUniversity())
app.get('/drivers/:university', db.getAllDriversByUniversity())

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})