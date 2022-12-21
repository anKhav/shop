const orderService = require("../service/orderService");
const ApiError = require("../error/ApiError");

class OrderController {
    async getAllOrders(req,res,next){
        try {
            const orders = await orderService.getAllOrders()
            return res.json(orders)
        } catch (e){
            return ApiError.badRequest('No users')
        }
    }
}
module.exports = new OrderController()