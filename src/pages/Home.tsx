import { MdEmail, MdMore } from "react-icons/md";
import {
    SiBluesky,
    SiGithub,
    SiPatreon,
    SiYoutube
} from "react-icons/si";

import imgLogo from "@/png/logo.png";
import { BiChevronsRight, BiImage, BiJoystick } from "react-icons/bi";
import {
    Link,
    Game,
    Profile,
    Feed,
    Module
} from "@/components";
import { useQuery } from "@tanstack/react-query";
import { getGames } from "@/api/games";
import { handleGetGames } from "@/../index";
import IcoEngine from "@/icons/Engine";
import IcoWebPlatform from "@/icons/Webplatform";

export default function Home() {
    document.title = "Home";

    return (
        <div className="bg-bg dark:bg-dark-bg flex flex-row max-md:flex-col text-text dark:text-dark-text min-h-dvh">
            <Profile />
            <div className="md:sticky md:top-0 md:overflow-auto w-full px-4 py-4 max-md:pt-0 flex flex-col gap-4">
                <div className="flex gap-4">
                    <Module
                        label="42eng"
                        description="My Game Engine"
                        to="https://github.com/wmgcat/42eng"
                        Icon={<IcoEngine />}
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
            </div>
        </div>
    )
}