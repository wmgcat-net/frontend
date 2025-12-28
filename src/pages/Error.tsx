import { Link } from "@/components";
import { changeDocMode } from "@/stores/darkmode";
import { BiChevronsLeft } from "react-icons/bi";
import { useSelector } from "react-redux";
import { ErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const err = useRouteError() as ErrorResponse;
    const isDarkMode = useSelector((state: any) => state?.darkMode?.isDarkMode);
    changeDocMode(isDarkMode);

    document.title = String(err.status);

    return (
        <div className="bg-bg dark:bg-dark-bg flex gap-4 flex-col justify-center items-center text-text dark:text-dark-text min-h-dvh">
            <p className="text-3xl">Error {err.status}</p>
            {err && err?.statusText && <p>{err.statusText}</p>}
            <div className="bg-primary dark:bg-dark-primary text-outline-primary dark:text-dark-outline-primary rounded-2xl">
                <Link
                    label="Back to home"
                    href="/"
                    Icon={BiChevronsLeft}
                    placement="left"
                    bordered
                    target={null}
                />
            </div>      
        </div>
    );
}