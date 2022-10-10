const Router = require ('express')
const router = new Router()
const userController = require('../controllers/userController')
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/authMiddleware')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min:3, max:32}),
    userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)
router.get('/orders',authMiddleware, userController.getOrders)
router.post('/orders',authMiddleware, userController.createOrder)


module.exports = router