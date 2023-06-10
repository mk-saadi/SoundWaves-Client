/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../component/authProvider/AuthProvider";
import { useContext } from "react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-ring  h-32 w-32"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }

    return (
        <Navigate
            to="/login"
            state={{ from: location }}
            replace
        ></Navigate>
    );
};

export default PrivateRoute;
