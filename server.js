// all other imports below here
// import 'dotenv/config';

require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const routes = require('./routes')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true}))

// to add psuedo user session go to https://www.robinwieruch.de/node-express-server-rest-api/
// Defining the routes to use
app.use('/data', routes.data)

app.listen(port, () => 
    console.log(`App listening on port ${port}`)
)
