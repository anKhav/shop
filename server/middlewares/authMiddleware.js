const ApiError = require('../error/ApiError')
const tokenService = require('../service/tokenService')

module.exports = function (req,res, next) {
    try{
        const authorizationHeader = req.headers.authorization
        if (!authorizationHeader){
            return next(ApiError.badRequest('Unauthorized'))
        }

        const accessToken = authorizationHeader.split(' ')[1]
        if (!accessToken){
            return next(ApiError.badRequest('Unauthorized'))
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData){
            return next(ApiError.badRequest('Unauthorized'))
        }
        req.user = userData
        next()
    } catch (e) {
        return next(ApiError.badRequest('Unauthorized'))
    }
}
