const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS'){
        next()
    } try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token){
            return res.status(401).json({message:"User doesnt auth"})
        }
        req.user  = jwt.verify(token, process.env.SECRET_KEY)
        console.log(req.headers.authorization)
        next()
    } catch (e ){
        res.status(401).json({message:"User doesnt auth"})
    }
}
