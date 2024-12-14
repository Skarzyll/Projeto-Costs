import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('costs', 'root', '26340521', {
    host: '0.0.0.0',
    dialect: 'mysql',
    dialectOptions: {
        socketPath: '/var/run/mysqld/mysqld.sock'
    }
})

sequelize.authenticate().then(console.log('autenticado'))

const Project = sequelize.define('projects', {
    id: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    name: { 
        type: DataTypes.STRING, 
        allowNull: false,
        onUpdate: true
    },

    buy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onUpdate: true
    },

    categoria_id: {
        type: DataTypes.STRING,
        allowNull: false,
        onUpdate: true
    }
})

//Project.sync({force: true})

export default Project
