//modules//
const express = require( 'express' );
const {Sequelize} = require( "sequelize" );
const bodyParser = require( 'body-parser' );
const userRoutes = require( './routes/user' );
const path = require( 'path' );
const helmet = require( "helmet" );
require( 'dotenv' ).config();


//sequelize//
new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

const app = express();

app.use( (req, res, next) => {
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    res.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' );
    res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS' );
    next();
} );

app.use( helmet() );
app.use( bodyParser.json() );
//routers//


module.exports = app;
