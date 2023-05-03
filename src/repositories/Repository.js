const consult = require('../database/products.js');

class Repository {
    create(data){        
        const sql = "SELECT * FROM  products;";
        return consult(sql, data);
    } 

    findAll(){
        const sql = "SELECT * FROM products;";        
        return consult(sql);
    }

    findById(id){        
        const sql = "SELECT * FROM products WHERE id=?;";        
        return consult(sql, id);        
    }
    update(data, id){
        const sql = "UPDATE products SET ? WHERE id=?;"
        return consult(sql, [data, id]);
    }
    delete(id){
        const sql = "DELETE FROM products WHERE id=?;"
        return consult(sql, id);  
    }
}

module.exports = new Repository;