/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../component/authProvider/AuthProvider";
import useInstructor from "../component/hooks/useInstructor";

const InstructorRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isInstructor, isInstructorLoading] = useInstructor();
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-ring  h-32 w-32"></span>
            </div>
        );
    }

    if (user && isInstructor) {
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

export default InstructorRoutes;
