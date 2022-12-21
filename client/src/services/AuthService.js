import axiosApi from "../http/axios";
// import axios from "axios";

export default class AuthService {
    static async login (user) {
        return axiosApi.post('/user/login', user)
        // return axios.post('/user/login', user)
    }

    static async registration (user) {
        return axiosApi.post('/user/registration', user)
    }

    static async logout () {
        return axiosApi.post('/user/logout')
    }
}