const express = require('express');
const router = require('./src/routes/routes.js')



const app = express();

//Enable read json in body
app.use(express.json());

app.use(router);


module.exports = app;
