const Sequelize = require('sequelize');
const db = require('../config/config');

const Users = db.define('user', {
    email: {
        type: Sequelize.STRING,
        unique: 'email'
    },
    nom: {
        type: Sequelize.STRING
    },
    prenom: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    poste: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING
    },
    admin: {
        type: Sequelize.INTEGER
    }
});

module.exports = Users;
