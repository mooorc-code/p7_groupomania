const Sequelize = require( 'sequelize' );
const db = require( '../config/config' );

const Posts = db.define( 'post', {

    user_id: {
        type: Sequelize.INTEGER,

    },
    publication: {
        type: Sequelize.STRING,

    },
    image: {
        type: Sequelize.STRING,

    },
} );

module.exports = Posts;
