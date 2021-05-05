const express = require('express')

const RouterMain = express.Router()
const { BandasRouter } = require('./Bandas.routes')

RouterMain.use('/bandas', BandasRouter)

module.exports = { RouterMain }
