import { BiChevronsRight } from "react-icons/bi";
import {
    Link,
    Game,
    Profile,
    Feed,
    Module,
    Creative,
    Container,
    Button
} from "@/components";
import { handleGetGames } from "@/api/games";
import IcoEngine from "@/icons/Engine";
import IcoWebPlatform from "@/icons/Webplatform";
import IcoMinecraftServer from "@/png/minecraft.png";
import { handleGetCreatives } from "@/api/creatives";
import { NavLink } from "react-router-dom";

export default function Home() {
    document.title = "wmgcat";

    return (
        <div className="bg-bg z-0 dark:bg-dark-bg w-full flex justify-center min-h-screen text-text dark:text-dark-text">
            <div
                className="fixed left-0 top-0 w-full h-full z-1 bg-[url('/src/png/noize.png')] opacity-45 pointer-events-none"
            />
            <div className="flex flex-col max-md:w-full w-[60%] z-2">
                <Profile />
                <div className="w-full px-4 py-4 flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Module
                            label="42eng"
                            description="My Game Engine"
                            to="https://github.com/wmgcat/42eng"
                            Icon={<IcoEngine />}
                        />
                        <Module
                            label="Secret Server"
                            description="Minecraft 1.21.11"
                            to="https://t.me/smineserv_bot"
                            Icon={<img src={IcoMinecraftServer} className="h-8" />}
                        />
                        <Module
                            label="Secret"
                            description="Coming soon..."
                            Icon={<IcoWebPlatform />}
                        />
                    </div>
                    <Feed
                        queryFn={() => handleGetGames({ max: 3 })}
                        queryKey={[ "games" ]}
                        Component={Game}
                        header={(
                            <div className="flex flex-row gap-4 justify-between items-center border-outline-primary dark:border-dark-outline-primary w-full">
                                <p className="text-2xl">Projects</p>
                                <NavLink to="/games">
                                    <Button variant="second">
                                        View all
                                        <BiChevronsRight />
                                    </Button>
                                </NavLink>
                            </div>
                        )}
                    />
                    <Feed
                        direction="horizontal"
                        queryFn={() => handleGetCreatives({ max: 3 })}
                        queryKey={[ "creatives" ]}
                        Component={Creative}
                        header={(
                            <div className="flex flex-row gap-4 justify-between items-center border-outline-primary dark:border-dark-outline-primary w-full">
                                <p className="text-2xl">Fan arts</p>
                                <NavLink to="/creatives">
                                    <Button variant="second">
                                        View all
                                        <BiChevronsRight />
                                    </Button>
                                </NavLink>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}