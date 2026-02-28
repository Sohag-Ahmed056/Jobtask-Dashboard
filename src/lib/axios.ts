
import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import config from "../config/config";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: config.baseUrl,
    withCredentials: false
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // You can add headers here (e.g., Auth tokens)
        return config;
    }, 
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Handle successful responses
        return response;
    },
    (error: AxiosError) => {
        // Handle errors (e.g., 401 Unauthorized)
        return Promise.reject(error);
    }
);