import { Button, Container, Link } from "@/components";
import { changeDocMode } from "@/stores/darkmode";
import { BiChevronsLeft } from "react-icons/bi";
import { useSelector } from "react-redux";
import { ErrorResponse, NavLink, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const err = useRouteError() as ErrorResponse;
    const isDarkMode = useSelector((state: any) => state?.darkMode?.isDarkMode);
    changeDocMode(isDarkMode);

    document.title = String(err.status);

    return (
        <div className="bg-bg dark:bg-dark-bg flex gap-4 flex-col justify-center items-center text-text dark:text-dark-text min-h-screen p-4">
            <div
                className="fixed left-0 top-0 w-full h-full z-1 bg-[url('/src/png/noize.png')] opacity-45 pointer-events-none"
            />
            <Container>
                <div className="flex flex-col gap-4 z-1 items-center">
                    <p className="text-2xl">Error {err.status}</p>
                    {err && err?.statusText && <p>{err.statusText}</p>}
                    <NavLink
                        to="/"
                    >
                        <Button
                            variant="primary"
                        >
                            <BiChevronsLeft />
                            Back to home
                        </Button>
                    </NavLink>
                </div>
            </Container>
        </div>
    );
}