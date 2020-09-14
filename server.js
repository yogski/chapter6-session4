const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require(' ____ ') // import queries file
const port = 3000

// membuat server bisa membaca request body
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'This is Dashboard' })
})

// routing
app.get('/players', ____ ) // list all players
app.get('/players/:id', ____ ) // get single player based on id
app.post('/players', ____ ) // create new player
app.put('/players/:id', ____ ) // update existing player data
app.delete('/players/:id', ____ ) // delete player data

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})