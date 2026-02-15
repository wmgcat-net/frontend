import dayjs from "dayjs";
import { useState } from "react";
import { IconType } from "react-icons";
import { SiItchdotio } from "react-icons/si";
import Link from "./link";
import Container from "./container";
import Button from "./button";
import { NavLink } from "react-router-dom";

const Game: React.FC<{
    id: number;
    title: string;
    description: string;
    links?: {
        type: string;
        href: string;
    }[];
    files?: {
        name: string;
        href: string;
    }[];
    date_created: string;
}> = ({
    id,
    title,
    description,
    links,
    files,
    date_created
}) => {
    const [ isHover, setHover ] = useState<boolean>(false);

    const avatar = files?.find(prop => prop?.name.includes("avatar"));
    const video = files?.find(prop => prop?.name.includes("video"));
    const screenshots = files?.filter(prop => prop?.name?.includes("screenshots"));

    return (
        <Container>
            <div
                className="flex max-xl:flex-col gap-4"
                key={`game-${id}`}
            >
                <div className="flex flex-col gap-4 w-md max-xl:w-full max-xl:justify-center">
                    <div
                        className="relative w-full overflow-hidden"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        {(avatar) && <img src={avatar?.href} className="w-full aspect-video" />}
                        {(video && isHover) && <video src={video.href} className="w-full h-full aspect-video absolute top-0 left-0" autoPlay />}
                    </div>
                    {(screenshots?.length > 0) && (
                        <div className="grid gap-4 w-full grid-cols-3">
                            {screenshots?.map(screen => (
                                <img src={screen?.href} className="w-full overflow-hidden rounded-md" />
                            ))}
                        </div>
                    )}
                </div>
                <div className="flex-1 flex flex-col gap-2 justify-between">
                    <div className="flex flex-col gap-2">
                        <p className="text-2xl">{title}</p>
                        <p className="font-light">{description}</p>
                        <ul className="flex flex-wrap gap-4 text-link dark:text-dark-link">
                            {links?.map((link, i) => {
                                let Icon: IconType;
                                let label: string;

                                switch(link?.type) {
                                    case "itch":
                                        Icon = SiItchdotio;
                                        label = "Itch.io";
                                    break;
                                    case "ng":
                                        label = "Newgrounds";
                                    break;
                                }

                                if (!label)
                                    return null;

                                return (
                                    <li key={i}>
                                        <NavLink to={link?.href} target="_blank">
                                            <Button variant="default">
                                                {Icon && <Icon />}
                                                {label}
                                            </Button>
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <p className="text-end font-extralight text-md text-white/75">{dayjs(date_created)?.format("MMMM D, YYYY")}</p>
                </div>
            </div>
        </Container>
    );
}

export default Game;