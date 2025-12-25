import Response from "@/types/response";
import apiInstance from ".";
import { AxiosError } from "axios";

/**
 * 
 * Returned all games
 * 
 * @param offset Limit 
 * @param limit Offset
 * @returns 
*/
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

/**
 * 
 * Returned game's details
 * 
 * @param id Game ID
 * @returns 
*/
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

/**
 * Get pagination content
 * @returns 
 */
export const handleGetGames = async ({ pageParam = 0, max = 5 }) => {
    const response = await getGames(pageParam, max);
    return response;
}