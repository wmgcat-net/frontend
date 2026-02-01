import { BiChevronsRight } from "react-icons/bi";
import {
    Link,
    Game,
    Profile,
    Feed,
    Module,
    Creative
} from "@/components";
import { handleGetGames } from "@/api/games";
import IcoEngine from "@/icons/Engine";
import IcoWebPlatform from "@/icons/Webplatform";
import IcoMinecraftServer from "@/png/minecraft.png";
import { handleGetCreatives } from "@/api/creatives";

export default function Home() {
    document.title = "wmgcat";

    return (
        <div className="bg-bg dark:bg-dark-bg w-full flex justify-center min-h-dvh text-text dark:text-dark-text">
            <div className="flex flex-col max-md:w-full w-[60%]">
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
                                <p className="text-2xl">Games</p>
                                <div className="bg-primary dark:bg-dark-primary text-outline-primary dark:text-dark-outline-primary rounded-2xl">
                                    <Link
                                        label="View all"
                                        href="/games"
                                        Icon={BiChevronsRight}
                                        placement="right"
                                        bordered
                                        target={null}
                                    />
                                </div>
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
                                <p className="text-2xl">Creatives</p>
                                <div className="bg-primary dark:bg-dark-primary text-outline-primary dark:text-dark-outline-primary rounded-2xl">
                                    <Link
                                        label="View all"
                                        href="/creatives"
                                        Icon={BiChevronsRight}
                                        placement="right"
                                        bordered
                                        target={null}
                                    />
                                </div>
                            </div>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}