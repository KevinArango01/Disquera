const { sequelize } = require('../../infrastructure/database/Conexion')

const { Bandas } = require('../../infrastructure/database/models/index')


class BandasStorage {
	constructor() {
		this.db = sequelize
		this.model = Bandas
	}

    getBanda(){
        return new Promise(async (resolve, reject) => {
            try{
                const result = await this.model.findAll;
                if(result){
                    resolve({
                        data: result,
                        message: `Bandas obtenidas`,
                        status: true,
                    })
                }
                resolve({
					message: `No hay datos!`,
					status: false,
				})
            }catch (error) {
				reject(error)
			}
        })
    }

    createBanda(banda) {
		return new Promise(async (resolve, reject) => {
			try {

				const result = await this.model.create(banda)
				
				if (result) {
					resolve({
						message: `Banda creada`,
                        data:     result.dataValues,
						status: true,
					})
				}

				resolve({
					message: `ERROR`,
					status: false,
				})
			} catch (error) {
                
				reject(error)
			}
		})
	}

}

module.exports = { BandasStorage }