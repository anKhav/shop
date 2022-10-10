// const ApiError = require('../error/ApiError')
// const bcrypt = require('bcrypt')
// const jwt = require('jsonwebtoken')
// const {User} = require('../models/models')
//
// const generateJwt = (id, email, role) => {
//     return jwt.sign(
//         {id, email, role},
//         process.env.SECRET_KEY,
//         {expiresIn:'24h'}
//     )
// }
//
// class UserController {
//     async registration(req, res, next) {
//         const {email, password, role} = req.body
//         if (!email || !password) {
//             return next(ApiError.badRequest('No email or password'))
//         }
//         const candidate = await User.findOne({where: {email}})
//         if (candidate) {
//             return next(ApiError.badRequest('User already exists'))
//         }
//         const hashPassword = await bcrypt.hash(password, 5)
//         const user = await User.create({email, role, password: hashPassword})
//         // const basket = await Basket.create({userId: user.id})
//         const token = generateJwt(user.id, user.email, user.role)
//         res.json({token})
//     }
//     async login(req, res, next) {
//         const {email, password} = req.body
//         const user = await User.findOne({where:{email}})
//         if(!user){
//             return next(ApiError.badRequest('User doesnt found'))
//         }
//         let comparePassword = bcrypt.compareSync(password, user.password)
//         if(!comparePassword){
//             return next(ApiError.badRequest('Incorrect password'))
//         }
//         const token = generateJwt(user.id, user.email, user.role)
//         return res.json({token})
//     }
//     async check(req, res) {
//         const token = generateJwt(req.user.id, req.user.email, req.user.role)
//         return res.json({token})
//     }
// }
// module.exports = new  UserController()

const userService = require('../service/userService')
const orderService = require('../service/orderService')
const ApiError = require('../error/ApiError')
const {validationResult} = require('express-validator')

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()){
                return next(ApiError.badRequest('Validation Error', errors.array()))
            }
            const {email, password, role} = req.body
            const userData = await userService.registration(email, password, role, next)
            res.cookie('refreshToken',userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 *1000, httpOnly:true} )
            return res.json(userData)
        } catch (e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try {
            const {email, password, role} = req.body
            const userData = await userService.login(email, password, role, next)
            res.cookie('refreshToken',userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 *1000, httpOnly:true} )
            return res.json(userData)
        } catch (e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            console.log(req.cookies)
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect('http://google.com/')
        } catch (e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken',userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 *1000, httpOnly:true} )
            return res.json(userData)

        } catch (e){
            // return next(ApiError.badRequest(e.message))
            return res.json({message:'hello'})
        }
    }

    async getUsers(req, res, next) {
        try {
            const users = await userService.getAllUsers()
            return res.json(users)
        } catch (e){
            return ApiError.badRequest('No users')
        }
    }

    async createOrder(req, res, next){
        try {
            const {id} = req.user
            console.log(id);
            const order = req.body

            console.log(order);
            const orders = await orderService.createOrder(order, id)
            return res.json(orders)
        } catch (e){
            return ApiError.badRequest('No users')
        }
    }

    async getOrders(req, res, next) {
        try {
            const {id} = req.user
            console.log(id);
            const orders = await orderService.getAllOrders(id)
            return res.json(orders)
        } catch (e){
            return ApiError.badRequest('No users')
        }
    }
}
module.exports = new UserController()