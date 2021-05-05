const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const { RouterMain } = require('./routes/index.routes')

app.use(bodyParser.json())
app.use(RouterMain)

module.exports = { app }