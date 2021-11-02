const Sequelize = require( 'sequelize' );
const db = require( '../config/config' );

const Comments = db.define( 'comment', {
    user_id: {
        type: Sequelize.INTEGER,

    },
    message_id: {
        type: Sequelize.INTEGER,

    },
    comment: {
        type: Sequelize.STRING,

    },
} );

module.exports = Comments;
