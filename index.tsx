import { createRoot } from "react-dom/client";
import "@/styles.css";
import Home from "@/pages/Home";
import { Router, RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Content from "@/pages/Content";
import { Feed, Game } from "@/components";
import { getGames } from "@/api/games";

const queryClient = new QueryClient();

/**
 * Get pagination content
 * @returns 
 */
export const handleGetGames = async ({ pageParam = 0, max = 5 }) => {
    const response = await getGames(pageParam, max);
    return response;
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/games",
        element: (
            <Content
                Feed={(
                    <Feed
                        queryFn={handleGetGames}
                        queryKey={[ "games" ]} 
                        Component={Game}
                        isMore
                    />
                )}
                title="Games"
            />
        )
    }
])

const app = document.getElementById("app");
if (app)
    createRoot(app).render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )