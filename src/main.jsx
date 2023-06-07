import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Admin from "./component/admin/Admin";
import Home from "./component/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Admin />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
