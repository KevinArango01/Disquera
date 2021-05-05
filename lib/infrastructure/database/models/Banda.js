const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Conexion').sequelize;

const Bandas = sequelize.define('Bandas', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false

  },
  integrantes: {
    type: DataTypes.INTEGER,
    allowNull: false
    
  },
  fecha_inicio: {
    type: DataTypes.DATE,
    allowNull: false
    
  },
  fecha_separacion: {
    type: DataTypes.DATE,
    
  },
  pais: {
    type: DataTypes.STRING(100),
    allowNull: false
    
  }
}, 
{
    sequelize,
		tableName: 'Bandas',
		timestamps: false,
  
});

module.exports = { Bandas }