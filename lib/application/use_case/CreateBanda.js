const { BandasEntity } = require('../../domain/entities/Bandas')

const {
    BandasRepository,
} = require('../repositories/BandasRepository')
const {
    BandasStorage,
} = require('../../interfaces/storage/BandasRepository')

const bandaRepository = new BandasRepository(new BandasStorage())

module.exports = (dataRequest) => {
	return new Promise(async (resolve, reject) => {
		try {

			const banda = new BandasEntity({
				nombre: dataRequest.nombre,
				integrantes: dataRequest.integrantes,
				fecha_inicio: dataRequest.fecha_inicio,
				fecha_separacion: dataRequest.fecha_separacion,
				pais: dataRequest.pais,
			})

			const result = await bandaRepository.createBanda(banda)

			if (result) {
				resolve(result)
			}

		} catch (error) {
			reject(error)
		}
	})
}