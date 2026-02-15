import axios from "axios";

const apiInstance = axios.create({
    baseURL: "https://api.wmgcat.net",
    timeout: 10000,
    timeoutErrorMessage: "errors.timeout",
    headers: {
        "Content-Type": "application/json"
    }
});

export default apiInstance;