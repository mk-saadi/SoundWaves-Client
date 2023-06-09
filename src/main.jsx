import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Admin from "./component/admin/Admin";
import Home from "./component/home/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import AuthProvider from "./component/authProvider/AuthProvider";
import Dashboard from "./component/dashboard/Dashboard";
import AdminHome from "./component/dashboard/admin/AdminHome";
import ManageClass from "./component/dashboard/admin/ManageClass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Admin />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "admin",
                element: <AdminHome />,
            },
            {
                path: "manageClass",
                element: <ManageClass />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
