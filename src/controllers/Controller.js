
import repositories from '../repositories/Repository.js';

class Controller {

    async get(req, res){
        const id = req.params.id;
        if(id){
            const result = await repositories.findById(id);
            res.json(result);
        }else{
            const result = await findAll();
            res.json(result);
        }                
    }
    async store(req, res){
        const data = req.body;
        const result = await repositories.create(data);
        res.json(result)        
    }
    async update(req, res){
        const id = req.params.id;
        const data = req.body;
        const result = await repositories.update(data, id);
        res.json(result);        
    }
    async delete(req, res){
        const id = req.params.id;
        const result = await repositories.delete(id);
        res.json(result);
    }
}

export default new Controller;
