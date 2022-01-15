module.exports = (sequelize, DataTypes) => {
    const Produccion = sequelize.define('produccion', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true, 
            primaryKey: false
        },
        estacion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {});
    return Produccion
}