/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../component/authProvider/AuthProvider";
import useAdmin from "../component/hooks/useAdmin";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars  md:h-52 h-32 md:w-52 w-32"></span>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return (
        <Navigate
            to="/"
            state={{ from: location }}
            replace
        ></Navigate>
    );
};

export default AdminRoutes;
