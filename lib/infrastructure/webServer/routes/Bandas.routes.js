const express = require('express')
const BandasRouter = express.Router()

const CreateBandasMiddlewares = require('../../../interfaces/middleware/CreateBandasMiddlewares')

const {
    getBandas,
    createBanda,
    deleteBanda,
    updateBanda,
} = require('../../../interfaces/controllers/BandasController')


BandasRouter.get('/getBandas', getBandas)
BandasRouter.post('/createBandas', CreateBandasMiddlewares  , createBanda)
BandasRouter.delete('/deleteBandas/:id', deleteBanda)
BandasRouter.put('/updateBandas/:id', updateBanda)

module.exports = {BandasRouter}
