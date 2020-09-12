const express = require('express');
const app = express();
const groceries = require('./routes/api/groceries');

//require the db configuration file
const connection = require('./config/db');

//require .env file
require('dotenv').config({ path: './config/.env' });

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use routes
app.use('/api/groceries', groceries);

// create db connection
connection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));
