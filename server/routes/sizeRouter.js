const Router = require ('express')
const router = new Router()
const sizeController = require('../controllers/sizeController')
const checkRole = require("../middlewares/checkRoleMiddleware");

router.post('/', checkRole('ADMIN'), sizeController.create)
// router.post('/', sizeController.create)
router.get('/', sizeController.getAll)


module.exports = router