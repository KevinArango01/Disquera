const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('mariadb://root:123456@localhost:3306/disquera')

sequelize.authenticate().then(() =>{
    console.log("Conectado a la base de datos");
})
.catch( (error)=>{
    console.log("ERROR: " +error);
})

module.exports = {sequelize}