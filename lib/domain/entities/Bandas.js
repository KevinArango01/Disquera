class BandasEntity {
	constructor({
		id,
        nombre,
        integrantes,
        fecha_inicio,
        fecha_separacion,
        pais,
	}) {
		this.id = id
		this.nombre = nombre
		this.integrantes = integrantes
		this.fecha_inicio = fecha_inicio
		this.fecha_separacion = fecha_separacion
		this.pais = pais
	}
}

module.exports = { BandasEntity }