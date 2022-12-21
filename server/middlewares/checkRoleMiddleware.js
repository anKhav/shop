const jwt = require('jsonwebtoken')
const ApiError = require("../error/ApiError");

module.exports = function () {
    return function (req, res, next) {
        if (req.method === 'OPTIONS'){
            return next(ApiError.badRequest('options'))
        } try {
            const authorizationHeader = req.headers.authorization
            if (!authorizationHeader){
                return next(ApiError.badRequest('Unauthorized'))
            }

            const accessToken = authorizationHeader.split(' ')[1]
            console.log(accessToken)
            if (!accessToken){
                return next(ApiError.badRequest('Unauthorized'))
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            console.log(decoded)
            if (decoded.role !== 'ADMIN') {
                return res.status(403).json({message:"No permit"})
            }
            req.user = decoded
            console.log(req.headers.authorization)
            next()
        } catch (e ){
            res.status(401).json({message:"User doesnt auth"})
        }
    }
}