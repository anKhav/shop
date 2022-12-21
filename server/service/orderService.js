const {Order} = require("../models/models");
const {Op} = require('sequelize')

class OrderService {
    // async getAllUserOrders(userId) {
    //     const orders = await Order.findAll({where: {userId: userId}})
    //     return orders
    // }
    async getAllOrders() {
        const orders = await Order.findAll({where:{userId:{[Op.ne]: null}}})
        return orders
    }
    async getAllOrders() {
        const orders = await Order.findAll()
        return orders
    }

    async createOrder(listProducts, userId) {
        try{
            const order = await Order.create({products:listProducts, userId})
            return order
        } catch (e) {
            console.log(e);
        }
    }

    async deleteOrder(userId) {
        try{
            const order = await Order.destroy({where:{userId}})
        } catch (e){
            console.log(e)
        }
    }
}

module.exports = new OrderService()