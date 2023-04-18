const express = require('express');

require('dotenv').config();

const app = express();


//get all products
app.get('/product', (res, req) => {

});
//get products by ID
app.get('/product/:id', (res, req) => {

});
//include a product
app.post('/product', (res, req) => {

});
//uptade a product
app.put('/product/:id', (res, req) => {

});
//delete product
app.delete('/product/:id', (res, req) => {

});

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running in port ${process.env.SERVER_PORT}`);
});
