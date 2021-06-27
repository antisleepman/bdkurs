
const {Service, ServiceInfo} = require('../models/models')
const ApiError = require('../error/ApiError')
class ServiceController{

    async create(req,res,next){
        try {
            const {name,price,branchid,typeid,info,duraction,date} = req.body
            const service = await Service.create({name,price,branchid,typeid,duraction,date})
            if (info){
                info = JSON.parse(info)
                info.forEach(i => 
                    ServiceInfo.create({
                        title: i.title,
                        description: i.description,
                        serviceId: service.id
                    })
                );
            }
           
            return res.json(service)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
        

    }

    async getAll(req,res){
        const{branchid,typeid} = req.query
        let services;
        if (!branchid && !typeid)
        {
            services = await Service.findAll()

        }
        if (branchid && !typeid)
        {
            services = await Service.findAll({where:{branchid}})
        }
        if (!branchid && typeid)
        {
            services = await Service.findAll({where:{typeid}})
        }
        if (branchid && typeid)
        {
            services = await Service.findAll({where:{typeid,branchid}})
        }
        return res.json(service)
    }

    async getOne(req,res){
        const{id} = req.params
        const service = await service.findOne(
            {
              where: {id},
              include: [{model:ServiceInfo,as:'info'}]
            },
        )
        return res.json(service)

    }

   
}

module.exports = new ServiceController()