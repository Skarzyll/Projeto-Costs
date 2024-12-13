import { Sequelize, DataTypes } from 'sequelize'
import 'dotenv/config'

const PORT = process.env.PORT || 3306

const sequelize = new Sequelize('costs', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: PORT
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
