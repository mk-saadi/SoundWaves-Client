import { useEffect, useState } from "react";

const UserRoutes = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [hasGeneralUsers, setHasGeneralUsers] = useState(false);

    useEffect(() => {
        fetch("http://localhost:12000/users")
            .then((response) => response.json())
            .then((data) => {
                // Check if there are any users with empty or undefined roles
                const generalUsersExist = data.some((user) => !user.role);

                setHasGeneralUsers(generalUsersExist);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching user data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-bars md:h-52 h-32 md:w-52 w-32"></span>
            </div>
        );
    }

    return hasGeneralUsers ? children : null;
};

export default UserRoutes;
