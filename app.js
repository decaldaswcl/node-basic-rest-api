const express = require('express');
const router = require('./src/routes/routes.js')
const mysql = require('mysql');
require('dotenv').config();

const app = express();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect();


//Enable read json in body
app.use(express.json());

app.use(router);

module.exports = app;
