import axios from 'axios';
import {SERVER_URL} from "../utils/consts";

const axiosApi = axios.create({
    withCredentials:true,
    baseURL:`${SERVER_URL}/api`
})

axiosApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default axiosApi