//modules//
const express = require( 'express' );
const Sequelize = require( "sequelize" );
const bodyParser = require( 'body-parser' );
const userRoutes = require( './routes/user' );
const postRoutes = require( './routes/post' );
const commentRoutes = require( './routes/comment' );
const path = require( 'path' );
const helmet = require( "helmet" );
require( 'dotenv' ).config();

//Database
const db = require( './config/config' );
//Test connexion DB
db.authenticate()
    .then( () => console.log( 'Database connected' ) )
    .catch( err => console.log( 'Error: ' + err ) )

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
app.use( '/api/auth', userRoutes );
app.use( '/api/post', postRoutes );
app.use( '/api/comment', commentRoutes );

module.exports = app;
