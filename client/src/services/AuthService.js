import axiosApi from "../http/axios";

export default class AuthService {
    static async login (user) {
        return axiosApi.post('/login', user)
    }

    static async registration (user) {
        return axiosApi.post('/registration', user)
    }

    static async logout () {
        return axiosApi.post('/logout')
    }

}