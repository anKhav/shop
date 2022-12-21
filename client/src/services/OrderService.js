import axiosApi from "../http/axios";

export default class OrderService {
    static async createOrder (order) {
        return axiosApi.post('/user/orders', order)
    }

    static async getAllUserOrders () {
        return axiosApi.get('/user/orders')
    }
    static async getAllOrders () {
        return axiosApi.get('/user/allorders')
    }
}