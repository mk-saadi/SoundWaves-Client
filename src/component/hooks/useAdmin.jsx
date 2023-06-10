// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";
// import useAxiosHook from "./useAxiosHook";

// const useAdmin = () => {
//     const { user, loading } = useContext(AuthContext);
//     const [axiosSecure] = useAxiosHook();
//     // use axios secure with react query
//     const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
//         queryKey: ["isAdmin", user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             console.log(res.data.admin);
//             return res.data.admin;
//         },
//     });
//     return [isAdmin, isAdminLoading];
// };
// export default useAdmin;

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import useAxiosHook from "./useAxiosHook";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosHook();
    // use axios secure with react query
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery(["isAdmin", user?.email], {
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log(res.data.admin);
            return res.data.admin;
        },
    });

    return [isAdmin, isAdminLoading];
};

export default useAdmin;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";
// import useAxiosHook from "./useAxiosHook";

// const useAdmin = () => {
//     const { user, loading } = useContext(AuthContext);
//     const [axiosSecure] = useAxiosHook();
//     const [isAdmin, setIsAdmin] = useState(false);
//     const [isAdminLoading, setIsAdminLoading] = useState(true);

//     useEffect(() => {
//         const fetchIsAdmin = async () => {
//             try {
//                 if (!loading && user) {
//                     const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//                     setIsAdmin(res.data.admin);
//                     console.log(res.data.admin);
//                     setIsAdminLoading(false);
//                 }
//             } catch (error) {
//                 console.log("Error fetching admin status:", error);
//             }
//         };

//         fetchIsAdmin();
//     }, [axiosSecure, loading, user]);

//     return [isAdmin, isAdminLoading];
// };

// export default useAdmin;
