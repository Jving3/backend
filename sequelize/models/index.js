//Conexion con la Base de Datos.
import Sequelize from 'sequelize'


const sequelize = new Sequelize('bdproyecto', 'root', 'root', {//Modifica los datos para conectarte a la Bd
    host: 'localhost',
    dialect: 'mysql'
})

const models = {
    persona: sequelize.import('./persona')
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models