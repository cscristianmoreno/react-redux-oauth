import axios, { AxiosInstance } from "axios";

const URL: string = "http://localhost:8080";

export const http: AxiosInstance = axios.create({
    baseURL: URL
});