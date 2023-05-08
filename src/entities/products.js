import connection from "../database/connection.js";


function consult(sql, values = '') {
    return new Promise((resolve) => {
        connection.query(sql, values, (error, result) => {

            if (error) {
                const jsonResult = { errorMessage: JSON.parse(JSON.stringify(error)) };
                return resolve(jsonResult);
            }
            if (result.id != '') {
                const jsonResult = JSON.parse(JSON.stringify(result));
                return resolve(jsonResult);
            }
            if (result.changedRows == 0) {
                const jsonResult = { message: "id não encontrado" };
                return resolve(jsonResult);
            }
            const jsonResult = { message: "sucess" };
            return resolve(jsonResult);
        });
    });
}

export default consult;