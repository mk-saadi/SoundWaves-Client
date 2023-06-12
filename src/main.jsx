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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdminRoutes from "./routes/AdminRoutes";
import Instructor from "./component/dashboard/instructor/Instructor";
import InstructorRoutes from "./routes/InstructorRoutes";
import PrivateRoute from "./routes/PrivateRoute";
import MyClasses from "./component/dashboard/instructor/MyClasses";
import SelectedClass from "./component/dashboard/user/SelectedClass";
import AllClasses from "./component/extra/AllClasses";
import FamousInstructor from "./component/extra/FamousInstructor";

const queryClient = new QueryClient();

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
            {
                path: "/allClasses",
                element: <AllClasses />,
                loader: () => fetch("http://localhost:12000/classes"),
            },
            {
                path: "/famousInstructor",
                element: <FamousInstructor />,
            },
        ],
    },
    {
        path: "dashboard",
        element: (
            <PrivateRoute>
                <Dashboard />,
            </PrivateRoute>
        ),
        children: [
            {
                path: "admin",
                element: (
                    <AdminRoutes>
                        <AdminHome />
                    </AdminRoutes>
                ),
            },
            {
                path: "adminClass",
                element: (
                    <AdminRoutes>
                        <ManageClass />
                    </AdminRoutes>
                ),
            },
            {
                path: "instructorHome",
                element: (
                    <InstructorRoutes>
                        <Instructor />
                    </InstructorRoutes>
                ),
            },
            {
                path: "myClasses",
                element: (
                    <InstructorRoutes>
                        <MyClasses />
                    </InstructorRoutes>
                ),
            },
            {
                path: "selectedClass",
                element: <SelectedClass />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </AuthProvider>
    </React.StrictMode>
);
