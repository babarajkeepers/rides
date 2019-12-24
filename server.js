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

app.get('/api', (request, response) => {
    response.json({ 'Welcome Note': 'Welcome to the API of rides app' })
})

app.get('/api/students', db.getStudents)

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})