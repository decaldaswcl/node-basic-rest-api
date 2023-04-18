const express = require('express')
const app = express()
const port = 3000

//get all products
app.get('/product', (res, req) => {

})
//get products by ID
app.get('/product/:id', (res, req) => {

})
//include a product
app.post('/product', (res, req) => {

})
//uptade a product
app.put('/product/:id', (res, req) => {

})
//delete product
app.delete('/product/:id', (res, req) => {

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})