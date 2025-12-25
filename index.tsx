import "@/styles.css";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouteContent, RouteHome } from "@/routes";

const queryClient = new QueryClient();
const router = createBrowserRouter([
    RouteHome,
    ...RouteContent
])

const app = document.getElementById("app");
if (app)
    createRoot(app).render(
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )