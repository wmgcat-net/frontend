import dayjs from "dayjs";
import { IconType } from "react-icons";
import { SiTelegram } from "react-icons/si";
import Link from "./link";
import { BiLink } from "react-icons/bi";

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
}) => (
    <div
        className="flex flex-col gap-4 p-4 border border-outline dark:border-dark-outline bg-block dark:bg-dark-block rounded-2xl text-text dark:text-dark-text"
        key={`game-${id}`}
    >
        <div className="w-full flex justify-center">
            <div className="flex flex-row gap-4 flex-wrap relative w-75 aspect-square rounded-md overflow-hidden">
                {(files?.length > 0) && (
                    files?.map((screen, i: number) => (
                        <img src={screen?.href} className={`w-full h-full`} />
                    ))
                )}
            </div>
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
            <div className="flex flex-col gap-2">
                <p className="text-2xl truncate ... text-center">{author}</p>
                <ul className="flex flex-col gap-2 text-link dark:text-dark-link">
                    {links?.map((link, i) => {
                        let Icon: IconType;
                        let label: string;

                        switch(link?.type) {
                            case "telegram":
                                Icon = SiTelegram;
                                label = "Telegram";
                            break;
                            default:
                                Icon = BiLink;
                                label = link.type;
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

export default Creative;