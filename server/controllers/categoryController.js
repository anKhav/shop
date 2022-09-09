const {Category} = require('../models/models')
// const ApiError = require('../error/ApiError')

class CategoryController {
    async create(req, res) {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }
    async getAll(req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }
    async delete(req,res) {
        const {name} = req.body
        console.log(name)
        const row = await Category.findOne({
            where: {name}
        })
        if (row) {
            await row.destroy(); // deletes the row
            return res.json(row)
        }
    }
}
module.exports = new  CategoryController()