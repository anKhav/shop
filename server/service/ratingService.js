const {Rating} = require("../models/models");
const {Op} = require('sequelize')

class RatingService {
    async getAllRatingsOfProduct(id) {
        const ratings = await Rating.findAll({where:{productId:id}})
        const ratingStr = ratings.reduce((acc, rating) =>{
            acc+= rating.rate
            return acc
        }, 0)
        const result = ratingStr / ratings.length

        return result.toFixed(1)
    }
    async getOneProductUserRatings(userId, productId) {
        const ratings = await Rating.findAll({where: {userId, productId}})
        return ratings
    }
    // async getAllRatings() {
    //     const ratings = await Rating.findAll({where:{userId:{[Op.ne]: null}}})
    //     return ratings
    // }
    async getAllOrders() {
        const ratings = await Rating.findAll()
        return ratings
    }

    async createRating(rate, userId) {
        try{
            const rating = await Rating.create({rate, userId})
            return rating
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new RatingService()