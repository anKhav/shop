const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        if (req.method === 'OPTIONS'){
            next()
        } try {
            const token = req.headers.authorization.split(' ')[1]
            if (!token){
                return res.status(401).json({message:"User doesnt auth"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            if (decoded.role !== role) {
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