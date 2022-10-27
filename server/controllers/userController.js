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
            return res.redirect('http://localhost:3000/')
        } catch (e){
            return next(ApiError.badRequest(e.message))
        }
    }

    async refresh(req, res) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            res.cookie('refreshToken',userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 *1000, httpOnly:true} )
            return res.json(userData)
        } catch (e){
            return ApiError.badRequest(e.message)
        }
    }

    async getUsers(req, res) {
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
            const order = req.body

            const orders = await orderService.createOrder(order, id)
            return res.json(orders)
        } catch (e){
            return ApiError.badRequest('No users')
        }
    }

    async getOrders(req, res, next) {
        try {
            const {id} = req.user
            const orders = await orderService.getAllOrders(id)
            return res.json(orders)
        } catch (e){
            return ApiError.badRequest('No users')
        }
    }
}
module.exports = new UserController()