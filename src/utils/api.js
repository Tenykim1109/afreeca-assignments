import axios from "axios";

const URL = window.location.hostname === "localhost" ? "" : "/proxy";

export const API = axios.create({
    baseURL: URL,
    headers: {
        "Content-type": "application/x-www-form-urlencoded",
        "Accept": "*/*"
    },
    withCredentials: true,
});