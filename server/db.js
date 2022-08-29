const {Sequelize} = require('sequelize')

module.exports = new Sequelize(
    process.env.DB__NAME,
    process.env.DB__USER,
    process.env.DB__PASSWORD,
    {
        dialect: 'postgres',
        host:process.env.DB__HOST,
        port:process.env.DB__PORT,
    }
)