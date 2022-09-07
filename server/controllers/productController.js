const uuid = require('uuid')
const path = require('path')
const {Product} = require('../models/models')
const ApiError = require('../error/ApiError')
class ProductController {
    async create(req, res, next) {
        try {
            let {name, price, sizes, categories} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + '.jpg'
            img.mv(path.resolve(__dirname,'..', 'static', fileName))


            const product = await Product.create({
                name, price, img: fileName, sizes, categories
            })

            console.log(req.body)
            return res.json(product)
        } catch (e) {
            next(ApiError.badRequest(e.message))

        }
    }
    async getAll(req, res) {
        let {sizeId, categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
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
    async getOne(req, res) {
        const id = Number(req.params.id)

        let product = await Product.findOne(
            {
                where:id,
            }
        )
        return res.json({product})
    }
}
module.exports = new  ProductController()