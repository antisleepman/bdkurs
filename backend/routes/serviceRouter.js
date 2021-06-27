const Router = require('express')
const serviceController = require('../controllers/serviceController')
const router = new Router()
const ServiceController = require('../controllers/serviceController')
router.post('/',serviceController.create)
router.get('',serviceController.getAll)
router.get('/:id',serviceController.getOne)
module.exports = router