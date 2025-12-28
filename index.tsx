import "@/styles.css";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouteContent, RouteHome } from "@/routes";
import Main, { ErrorPage } from "@/pages";
import { Provider } from "react-redux";
import rootReducer from "@/stores";
import { configureStore } from "@reduxjs/toolkit";

const queryClient = new QueryClient();
const store = configureStore({
    reducer: rootReducer
});
const router = createBrowserRouter([
    {
        path: "/",
        Component: Main,
        ErrorBoundary: ErrorPage,
        children: [
            RouteHome,
            ...RouteContent
        ]
    }
])

const app = document.getElementById("app");
if (app)
    createRoot(app).render(
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </QueryClientProvider>
    );