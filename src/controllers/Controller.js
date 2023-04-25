const result = require('../config/config.js');
const Repository = require('../repositories/Repository.js')

class Controller {

    async get(req, res){
        const id = req.params.id;
        if(id){
            const result = await Repository.findById(id);
            res.json(result);
        }else{
            const result = await Repository.findAll();
            res.json(result);
        }                
    }
    async store(req, res){
        const data = req.body;
        const result = await Repository.create(data);
        res.json(result)        
    }
    async update(req, res){
        const id = req.params.id;
        const data = req.body;
        const result = await Repository.update(data, id);
        res.json(result);        
    }
    async delete(req, res){
        const id = req.params.id;
        const result = await Repository.delete(id);
        res.json(result);
    }
}

module.exports = new Controller;
