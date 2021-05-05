const {
	FindAll,
	CreateBanda,
    DeleteBanda,
    UpdateBanda
} = require('../../application/use_case/index')

module.exports = {

	async getBandas(req, res, next) {
		try {
			const findAllResult = await FindAll()

			next(findAllResult)

		} catch (error) {
			next(error)
		}
	},

	async createBanda(req, res, next) {
		try {
			const dataRequest = req.body
			const result = await CreateBanda(dataRequest)
			
			res.status(200).send(result)
			next(result)

		} catch (error) {
			console.log(error)
			next(error)
		}
	},

    async deleteBanda(req, res, next) {
		try {
			const getIdRequest = req.params.id
			const result = await DeleteBanda(getIdRequest)

			next(result)

		} catch (error) {
			next(error)
		}
	},

    async updateBanda(req, res, next) {
		try {
			const getIdRequest = req.params.id
            const dataRequest = req.body

			const result = await UpdateBanda(getIdRequest, dataRequest)

			next(result)

		} catch (error) {
			next(error)
		}
	},
}
