import { AxiosError } from "axios";
import apiInstance from ".";

export const postSubscribe = async (username: string, email: string) => {
    try {
        const response = await apiInstance.post(
            "/subscribe",
            {
               username,
               email
            }
        );
        return response?.data as Response;
    }
    catch(err) {
        if (err instanceof AxiosError)
            throw err?.response?.data;
        throw {
            error_message: "Unknown error"
        }
    }
}