const {Branch} = require('../models/models')
const ApiError = require('../error/ApiError');

class BranchController{

    async create(req,res){
        const {name} = req.body
        const branch = await Branch.create({name})
        return res.json(branch)

    }

    async getAll(req,res){
        const branchs = await Branch.findAll()
        return res.json(branchs)
    }

   
}

module.exports = new BranchController()