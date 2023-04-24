const express = require('express');
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

//get all products
app.get('/api/products', (req, res) => {
    const sql = "SELECT * FROM  products;"
    connection.query(sql, '', (error, result) => {
        if(error)  res.send(error);
        const jsonResult = JSON.parse(JSON.stringify(result));
        res.send(result);
    });
});

//get products by ID
app.get('/api/products/:id', (req, res) => {
    const sql = "SELECT * FROM products WHERE id=?;";
    const id = req.params.id;
    connection.query(sql, id, (error, result) => {
        if(error)  res.send(error);
        const jsonResult = JSON.parse(JSON.stringify(result));
        res.send(jsonResult);
    });
});

//include a product
app.post('/api/products', (req, res) => {
    const sql = "INSERT INTO products SET ?;";
    const data = req.body;
    connection.query(sql, data, (error, result) => {
        if(error){
            if(error.errno==1054) return res.status(404).send({errorMessage: error.sqlMessage});       
            return res.status(400).send({errorMessage: "Error unknown"});
        } 
        res.status(200).send({message: result.insertId+" id inserted"});
    });
});

//uptade a product
app.put('/api/products/:id', (req, res) => {
    const sql = "UPDATE products SET ? WHERE id=?;";
    const id = req.params.id;
    const data = req.body;

    connection.query(sql, [ data, id], (error, result) => {
        if(error){
            if(error.errno==1054) return res.status(404).send({errorMessage: error.sqlMessage});       
            return res.status(400).send({errorMessage: "Error unknown"});
        } 
        if(result.changedRows>0)return res.status(200).send({message: "id "+id+"deleted successfully"});
        if(result.changedRows>0){
            return res.status(200).send({message: "rows rows have been changed"});
        }else{
            res.status(200).send({message: "rows matched, but no have been changed"});
        }
    });
});

//delete product
app.delete('/api/products/:id', (req, res) => {
    const sql = "DELETE FROM products WHERE id=?;";
    const id = req.params.id;
    connection.query(sql, id, (error, result) => {
        if(error)return  res.send(error);        
        if(result.affectedRows==0) return res.status(404).send({errorMessage: "id "+id+" not found"});
        res.status(200).send({message: "id "+id+"deleted successfully"});
    });
});

module.exports = app;
