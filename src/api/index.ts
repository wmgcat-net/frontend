import axios from "axios";

const apiInstance = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 10000,
    timeoutErrorMessage: "errors.timeout",
    headers: {
        "Content-Type": "application/json"
    }
});

export default apiInstance;