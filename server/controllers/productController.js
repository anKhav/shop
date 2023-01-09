const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
const ratingController = require('../controllers/ratingController')
const ratingService = require('../service/ratingService')
const orderService = require("../service/orderService");
class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, tags} = req.body
            let sizes = req.body.sizes.split(',')
            let categories = req.body.categories.split(',')
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname,'..', 'static', fileName))

            const product = await Product.create({
                name, price, img: fileName, sizes, categories, tags
            })
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async delete(req,res) {
        const {id} = req.body
        // console.log(id)
        const row = await Product.findOne({
            where: {id}
        })
        console.log(row)
        if (row) {
            await row.destroy(); // deletes the row
            return res.json(row)
        }
    }
    async getAll(req, res) {
        let {sizeId, categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 100
        let offset = page * limit - limit

        let products
        if(!sizeId && !categoryId){
            products = await Product.findAndCountAll({limit, offset})
        }
        if(sizeId && !categoryId){
            products = await Product.findAndCountAll({where:{sizeId}, limit, offset})
        }
        if(!sizeId && categoryId){
            products = await Product.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if(sizeId && categoryId){
            products = await Product.findAndCountAll({where:{sizeId, categoryId}, limit, offset})
        }
        return res.json(products)
    }
    async getOne(req, res, next) {

        try {
            const id = Number(req.params.id)

            const rating = await ratingService.getAllRatingsOfProduct(id)
            let product = await Product.findOne({where:id})
            product.rating = rating
            await product.save()
            return res.json(product)
        } catch (e){
            return ApiError.badRequest('Error')
        }
    }
}
module.exports = new  ProductController()