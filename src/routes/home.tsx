import { ErrorPage, Home } from "@/pages";
import { RouteObject } from "react-router-dom";
import RouteContent from "./content";

const RouteHome: RouteObject = {
    path: "/",
    element: <Home />,
    ErrorBoundary: ErrorPage
}

export default RouteHome;