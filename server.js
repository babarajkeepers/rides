const express = require('express')
const bodyParser = require('body-parser')
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

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
})
