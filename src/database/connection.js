const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect();

const consult = (sql, values='') => {
    return new Promise((resolve) => {        
        connection.query(sql, values, (error, result) => {
            
            if(error){
                const jsonResult = { errorMessage: JSON.parse(JSON.stringify(error))};
                return resolve(jsonResult);
            }
            if(result.id != ''){
                const jsonResult = JSON.parse(JSON.stringify(result));
                return resolve(jsonResult);
            }
            if(result.changedRows==0){
                const jsonResult = { message: "id não encontrado"};
                return resolve(jsonResult);
            }
            const jsonResult = {message: "sucess"};
            return resolve(jsonResult);
         })
     })
}

module.exports = consult;


