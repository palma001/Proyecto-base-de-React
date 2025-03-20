/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

const get = (url: string, params?: any) => {
    return api.get(url, { params });
};

const post = (url: string, data?: any) => {
    return api.post(url, data);
};

const put = (url: string, data?: any) => {
    return api.put(url, data);
};

const deleteRequest = (url: string, data?: any) => {
    return api.delete(url, data);
};

export { get, post, put, deleteRequest };