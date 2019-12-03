// Connect to database
const Sequelize = require('sequelize');

module.exports = new Sequelize('practice', 'john_padillo', 'padillorrerr', {
  host: 'localhost',
  dialect: 'postgres'
});
