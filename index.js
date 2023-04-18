const express = require('express');
const mysql = require('mysql');

require('dotenv').config();
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect();

const app = express();
//Enable read json in body
app.use(express.json())

//get all products
app.get('api/products', (req, res) => {
    const sql = "SELECT * FROM  products;"
    connection.query(sql, '', (error, result) => {
        if(error)  res.send(error);
        const jsonResult = JSON.parse(JSON.stringify(result));
        res.send(result);
    });
});
//get products by ID
app.get('api/products/:id', (req, res) => {
    const sql = "SELECT * FROM products WHERE id=?;";
    const id = req.params.id
    connection.query(sql, id, (error, result) => {
        if(error)  res.send(error);
        const jsonResult = JSON.parse(JSON.stringify(result));
        res.send(result);
    });
});
//include a product
app.post('api/products', (req, res) => {
    const sql = "INSERT INTO products SET ?;";
    const data = req.body
    connection.query(sql, data, (error, result) => {
        if(error)  res.send(error);
        const jsonResult = JSON.parse(JSON.stringify(result));
        res.send(result);
    });
});
//uptade a product
app.put('api/products/:id', (req, res) => {
    const sql = "UPDATE products SET ? WHERE id=?;";
    const id = req.params.id
    const data = req.body
    connection.query(sql, [ data, id], (error, result) => {
        if(error)  res.send(error);
        const jsonResult = JSON.parse(JSON.stringify(result));
        res.send(result);
    });
});
//delete product
app.delete('api/products/:id', (req, res) => {
    const sql = "DELETE FROM products WHERE id=?;";
    const id = req.params.id
    connection.query(sql, id, (error, result) => {
        if(error)  res.send(error);
        const jsonResult = JSON.parse(JSON.stringify(result));
        res.send(result);
    });
});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running in port ${process.env.SERVER_PORT}`);
});
