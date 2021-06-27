import{makeAutoObservable} from 'mobx'

export default class ServiceStore {
    constructor() {
        this._types =[
                {id:1, name:'Операция'},
                {id:2, name:'Консультация'},
        ]

        this._Branchs =[
                {id:1, name:'Хирург'},
                {id:2, name:'Окулист'},

        ]

        this._Services =[
                {id:1,name:"Васильев", duration:'3 часа', price:2400, time:'24.03.2000'},
                {id:2, duration:'4 часа', price:4400, time:'24.03.2020'},
        ]
        this._selectedType = {}
        this._selectedBranch = {}
        makeAutoObservable(this)
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBranch(branch){
        this._selectedBranch = branch
    }

    setTypes(types){
        this._types = types
    }

    setBranch(branchs){
        this._Branchs = branchs
    }

    setServices(services){
        this._Services = services
    }

    get types(){
        return this._types
    }

    get branchs (){
        return this._Branchs
    }

    get services (){
        return this._Services
    }

    get selectedType (){
        return this._selectedType
    }

    get selectedBranch (){
        return this._selectedBranch
    }
}