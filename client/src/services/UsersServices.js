import axiosApi from "../http/axios";

export default class UsersServices {
    static async fetchUsers () {
        return axiosApi.get('/user/users')
    }
}