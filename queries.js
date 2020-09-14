// connect to DB
const Pool = require('pg').Pool
const pool = new Pool({
  user: '____', // your db user
  host: 'localhost',
  database: '____', // your db name
  password: '____', // your db password
  port: 5432,
})

const getPlayers = (request, response) => {
  pool.query('SELECT * FROM players ORDER BY id ASC', (error, results) => {
    if (error) {
      response.status(500).json(error)
    }
    response.status(200).json(results.rows)
  })
}

const getPlayersById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query(' ____ ', [id], (error, results) => { // query: get player by id
    if (error) {
        response.status(500).json(error)
    }
    response.status(200).json(results.rows)
  })
}

const createPlayers = (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO players (name, email) VALUES ( ____ ) RETURNING *', [name, email], (error, results) => { // set values for name and email
    if (error) {
        response.status(500).json(error)
    } else if (!Array.isArray( ____ ) || ____ < 1) { // if results has no rows or there is no result
    	response.status(500).json(error)
    }
    response.status(201).send(`Players added with ID: ${results.rows[0].id}`)
  })
}

const updatePlayers = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.____ // get data from request body

  pool.query(
    'UPDATE players SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [ ___ ], // entries for query
    (error, results) => {
      if (error) {
        ____ // send response with status 500 or internal server error
      }
      if (typeof results.rows == 'undefined') {
      	response.status(404).send(`Resource not found`);
      } else if (Array.isArray(results.rows) && results.rows.length < 1) {
      	____ // send 404 status with information 'Player not found'
      } else {
  	 	  response.status(200).send(`Players modified with ID: ${results.rows[0].id}`)
      }
    }
  )
}

const deletePlayers = (request, response) => {
  const id = parseInt( ____ ) // get data from request parameter (id)

  pool.query('DELETE FROM players WHERE id = $1', [id], (error, results) => {
    if (error) {
      ____ // send json with status 500
    }
    response.status(200).send(`Players deleted with ID: ${id}`)
  })
}

module.exports = {
  ____ ,
  ____ ,
  ____ ,
  ____ ,
  ____ ,
}