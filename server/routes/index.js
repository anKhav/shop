const Router = require ('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const sizeRouter = require('./sizeRouter')
const categoryRouter = require('./categoryRouter')


router.use('/user', userRouter)
router.use('/size', sizeRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)

module.exports = router