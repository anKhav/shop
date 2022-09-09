const {Size} = require('../models/models')
// const ApiError = require('../error/ApiError')

class SizeController {
    async create(req, res) {
        const {name, sizeIndex} = req.body
        const size = await Size.create({name, sizeIndex})
        return res.json(size)
    }
    async getAll(req, res) {
        const sizes = await Size.findAll()
        return res.json(sizes)
    }
}
module.exports = new  SizeController()