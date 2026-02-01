import { Creative, Feed, Game } from "@/components";
import { Content, ErrorPage } from "@/pages";
import { handleGetGames } from "@/api/games";
import { RouteObject } from "react-router-dom";
import { handleGetCreatives } from "@/api/creatives";

const RouteContent: RouteObject[] = [
    {
        path: "/games",
        element: (
            <Content
                title="wmgcat - games"
                Feed={(
                    <Feed
                        queryFn={handleGetGames}
                        queryKey={["content", "games"]} 
                        Component={Game}
                        isMore
                    />
                )}
            />
        ),
        ErrorBoundary: ErrorPage
    },
    {
        path: "/creatives",
        element: (
            <Content
                title="wmgcat - creatives"
                Feed={(
                    <Feed
                        queryFn={handleGetCreatives}
                        queryKey={["content", "creatives"]} 
                        Component={Creative}
                        direction="horizontal"
                        isMore
                    />
                )}
            />
        ),
        ErrorBoundary: ErrorPage
    }
]

export default RouteContent;