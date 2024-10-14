import axios from "axios";

// Create axios instance with base URL
const axiosInstance = axios.create({
    baseURL: "https://texnoark.ilyosbekdev.uz",
});

// Interceptor to add Authorization header if access token exists
axiosInstance.interceptors.request.use((config) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
        config.headers['Authorization'] = `Bearer ${access_token}`;
    }
    return config;
});

export default axiosInstance;
