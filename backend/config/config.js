const Sequelize = require( 'sequelize' );
require( 'dotenv' ).config()

module.exports = new Sequelize( process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',

} );
