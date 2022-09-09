const Router = require ('express')
const router = new Router()
const categoryController = require('../controllers/categoryController')
// const checkRole = require('../middlewares/checkRoleMiddleware')

// router.post('/', checkRole('ADMIN'), categoryController.create)
router.post('/', categoryController.create)
router.delete('/', categoryController.delete)
router.get('/', categoryController.getAll)


module.exports = router