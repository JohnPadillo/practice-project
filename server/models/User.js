const Sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('Users',{
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
})

module.exports = User; 