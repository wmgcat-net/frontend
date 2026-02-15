import { Button, Link } from "@/components";
import { BiChevronsLeft } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Content({
    Feed,
    title
}: {
    Feed: React.ReactNode;
    title: string;
}) {
    document.title = title;

    return (
        <div className="bg-bg dark:bg-dark-bg text-text dark:text-dark-text w-full flex justify-center min-h-screen">
            <div
                className="fixed left-0 top-0 w-full h-full z-1 bg-[url('/src/png/noize.png')] opacity-45 pointer-events-none"
            />
            <div className="flex flex-col p-4 gap-4 max-md:w-full w-[60%] z-1">
                <div className="flex flex-row gap-4 justify-between items-center border-outline-primary dark:border-dark-outline-primary w-full">
                    <NavLink to="/">
                        <Button variant="second">
                            <BiChevronsLeft />
                            Back
                        </Button>
                    </NavLink>
                    <p className="text-2xl">{title}</p>
                </div>
                {Feed && Feed}
            </div>
        </div>
    );
}