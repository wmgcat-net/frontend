import { Feed, Game } from "@/components";
import { Content } from "@/pages";
import { handleGetGames } from "@/api/games";
import { RouteObject } from "react-router-dom";

const RouteContent: RouteObject[] = [
    {
        path: "/games",
        element: (
            <Content
                title="Games"
                Feed={(
                    <Feed
                        queryFn={handleGetGames}
                        queryKey={["content", "games"]} 
                        Component={Game}
                        isMore
                    />
                )}
            />
        )
    },
    {
        path: "/creatives",
        element: (
            <Content
                title="Creatives"
                Feed={(
                    <Feed
                        queryFn={handleGetGames}
                        queryKey={["content", "creatives"]} 
                        Component={Game}
                        isMore
                    />
                )}
            />
        )
    }
]

export default RouteContent;