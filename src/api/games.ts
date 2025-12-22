import Response from "@/types/response";
import apiInstance from ".";
import { AxiosError } from "axios";

export const getGames = async (offset?: number, limit?: number) => {
    try {
        const response = await apiInstance.get(
            "/games",
            {
                params: {
                    offset,
                    limit
                }
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
export const getGamesDetails = async (id: number) => {
    try {
        const response = await apiInstance.get(`/games/${id}`);
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