const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    login:{type: DataTypes.STRING,unique:true},
    password:{type: DataTypes.STRING},
    role:{type:DataTypes.STRING,defaultValue: "USER"}
})


const Service = sequelize.define('service',{
    id: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    price:{type:DataTypes.INTEGER,allowNull:false},
    date:{type:DataTypes.DATE,allowNull:false},
    time:{type:DataTypes.TIME,allowNull:false},
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name: {type: DataTypes.STRING,unique:true,allowNull:false},
})

const Branch = sequelize.define('branch',{
    id: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name: {type: DataTypes.STRING,unique:true,allowNull:false},
})

const ServiceInfo = sequelize.define('service_info',{
    id: {type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type: DataTypes.STRING,allowNull:false},
    description:{type: DataTypes.STRING, allowNull:false}
})

const TypeService = sequelize.define('type_service',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
})


Type.hasMany(Service)
Service.belongsTo(Type)

Branch.hasMany(Service)
Service.belongsTo(Branch)



Service.hasMany(ServiceInfo, {as: 'info'})
ServiceInfo.belongsTo(Service)

Type.belongsToMany(Branch, {through:TypeService})
Branch.belongsToMany(Type, {through:TypeService})

module.exports = {
    User,
    Service,
    Type,
    Branch,
    TypeService,
    ServiceInfo
}

