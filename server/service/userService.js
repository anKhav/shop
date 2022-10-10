const {User} = require('../models/models')
const ApiError = require('../error/ApiError')

const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mailService')
const tokenService = require('./tokenService')
const UserDto = require('../dtos/userDto')

class UserService {
    async registration(email, password, role, next) {
        if (!email || !password) {
            return next(ApiError.badRequest('No email or password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('User already exists'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const activationLink = uuid.v4()

        const user = await User.create({email, role, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `http://localhost:5000/api/user/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user:userDto}
    }

    async activate (activationLink, next){
        const user = await User.findOne({where:{activationLink}})
        if (!user){
            return next(ApiError.badRequest('Uncorrect activation link'))
        }
        user.isActivate = true
        await user.save()
    }

    async login (email, password, role, next){
        const user = await User.findOne({where:{email}})
        if (!user){
            return next(ApiError.badRequest('User undefined'))
        }
        const isPassEqual = await bcrypt.compare(password, user.password)
        if (!isPassEqual){
            return next(ApiError.badRequest('Uncorrect password'))
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user:userDto}
    }

    async logout (refreshToken){
        const token = await tokenService.removeToken(refreshToken)
         return token
    }

    async refresh (refreshToken, next){
        if (!refreshToken){
            return next(ApiError.badRequest('Unauthorized'))
        }
        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb){
            return ApiError.badRequest('Unauthorized')
        }
        const user = await User.findOne({where:{id:userData.id}})

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})

        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user:userDto}
    }

    async getAllUsers() {
        const users = await User.findAll()
        return users
    }

}

module.exports = new UserService()