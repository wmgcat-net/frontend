import dayjs from "dayjs";
import { useState } from "react";
import { IconType } from "react-icons";
import { SiTelegram } from "react-icons/si";
import Link from "./link";

const Creative: React.FC<{
    id: number;
    author: string;
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
    author,
    links,
    files,
    date_created
}) => {
    const [ isHover, setHover ] = useState<boolean>(false);

    return (
        <div
            className="flex flex-col gap-4 p-4 border border-outline dark:border-dark-outline bg-block dark:bg-dark-block rounded-2xl text-text dark:text-dark-text"
            key={`game-${id}`}
        >
            <div className="flex flex-col gap-4 w-full max-xl:justify-center">
                {(files?.length > 0) && (
                    files?.map(screen => (
                        <img src={screen?.href} className="w-full aspect-square rounded-md" />
                    ))
                )}
            </div>
            <div className="flex-1 flex flex-col gap-2 justify-between">
                <div className="flex flex-col gap-2">
                    <p className="text-2xl">{author}</p>
                    <ul className="flex flex-col gap-2 text-link dark:text-dark-link">
                        {links?.map((link, i) => {
                            let Icon: IconType;
                            let label: string;

                            switch(link?.type) {
                                case "telegram":
                                    Icon = SiTelegram;
                                    label = "Telegram";
                                break;
                                case "ng":
                                    label = "Newgrounds";
                                break;
                            }

                            if (!label)
                                return null;

                            return (
                                <li key={i}>
                                    <Link
                                        href={link?.href}
                                        label={label}
                                        Icon={Icon}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <p className="text-end font-extralight text-md text-outline dark:text-dark-outline">{dayjs(date_created)?.format("MMMM D, YYYY")}</p>
            </div>
        </div>
    );
}

export default Creative;