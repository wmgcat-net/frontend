import Content from "./Content";
import Home from "./Home";
import ErrorPage from "./Error";

import { useOutlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { changeDocMode } from "@/stores/darkmode";

export default function Main() {
    const context = useOutlet();
    const isDarkMode = useSelector((state: any) => state?.darkMode?.isDarkMode);
    changeDocMode(isDarkMode);

    return context;
}

export {
    Content,
    Home,
    ErrorPage
}