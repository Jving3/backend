//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('exactadb', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

const models = {
    produccion: sequelize.import('./produccion')
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models