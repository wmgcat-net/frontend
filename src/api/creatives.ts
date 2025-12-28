import Response from "@/types/response";
import apiInstance from ".";
import { AxiosError } from "axios";

/**
 * 
 * Returned all creatives
 * 
 * @param offset Limit 
 * @param limit Offset
 * @returns 
*/
export const getCreatives = async (offset?: number, limit?: number) => {
    try {
        const response = await apiInstance.get(
            "/creatives",
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
 * Returned creative's details
 * 
 * @param id Game ID
 * @returns 
*/
export const getCreativesDetails = async (id: number) => {
    try {
        const response = await apiInstance.get(`/creatives/${id}`);
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
export const handleGetCreatives = async ({ pageParam = 0, max = 5 }) => {
    const response = await getCreatives(pageParam, max);
    return response;
}