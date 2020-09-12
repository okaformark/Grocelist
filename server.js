const express = require('express');
const app = express();
const connection = require('./config/db');
require('dotenv').config({ path: './config/.env' });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connection();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`));
