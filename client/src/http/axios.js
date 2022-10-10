import axios from 'axios';

const axiosApi = axios.create({
    withCredentials:true,
    baseURL:'http://localhost:5000/api'
})

axiosApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default axiosApi