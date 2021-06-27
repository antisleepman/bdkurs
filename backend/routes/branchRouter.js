const Router = require('express')
const branchController = require('../controllers/branchController')
const router = new Router()
const BranchController = require('../controllers/branchController')
const checkRole = require('../middleware/checkRoleMiddleware')
router.post('/',checkRole('ADMIN') ,branchController.create)
router.get('/',BranchController.getAll)
module.exports = router