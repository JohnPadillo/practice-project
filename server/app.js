const express = require('express');
const app = express();
const PORT = 8000;
const authRoute = require('./routes/auth');
// import db connection
const db = require('./config/database');
const bodyParser = require('body-parser');

// check db connection
db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// use authRoute
app.use('/api/user', authRoute);

// middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})