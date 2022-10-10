const {Order} = require("../models/models");

class OrderService {
    async getAllOrders(userId) {
        const orders = await Order.findAll({where:{userId:userId}})
        console.log(orders)
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
}

module.exports = new OrderService()