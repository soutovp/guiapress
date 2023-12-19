const Sequelize = require('sequelize')
const connection = new Sequelize('guiapress', 'root', '3866870a', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection