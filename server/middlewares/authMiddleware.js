const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS'){
        next()
    } try {
        const token = req.header.authorization.split(' ')[1]
        if (!token){
            return res.status(401).json({message:"User doesnt auth"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        res.json(req.header.authorization)
        next()
    } catch (e ){
        res.status(401).json({message:"User doesnt auth"})
    }
}