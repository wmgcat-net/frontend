import { Link } from "@/components";
import { BiChevronsLeft } from "react-icons/bi";

export default function Content({
    Feed,
    title
}: {
    Feed: React.ReactNode;
    title: string;
}) {
    document.title = title;

    return (
        <div className="bg-bg dark:bg-dark-bg flex flex-col min-h-dvh text-text dark:text-dark-text p-4 gap-4">
            <div className="flex flex-row gap-4 justify-between items-center border-outline-primary dark:border-dark-outline-primary w-full">
                <p className="text-2xl">Games</p>
                <div className="bg-primary dark:bg-dark-primary text-outline-primary dark:text-dark-outline-primary rounded-2xl">
                    <Link
                        label="Back"
                        href="/"
                        Icon={BiChevronsLeft}
                        bordered
                        target={null}
                    />
                </div>
            </div>
            {Feed && Feed}
        </div>
    );
}