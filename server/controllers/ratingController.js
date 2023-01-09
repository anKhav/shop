const {Rating} = require('../models/models')
const {body} = require("express-validator");
// const ApiError = require('../error/ApiError')

class RatingController {
    async create(req, res) {
        const {id} = req.user
        const {rate, productId} = req.body
        const rating = await Rating.create({rate, userId:id, productId})
        return res.json(rating)
    }
    async getAll(req, res) {
        const ratings = await Rating.findAll()
        return res.json(ratings)
    }

    async getOne(req, res) {
        const productId = req.params
        console.log(productId)
        const ratings = await Rating.findAll({where:productId})
        return res.json(ratings)
    }
}
module.exports = new  RatingController()