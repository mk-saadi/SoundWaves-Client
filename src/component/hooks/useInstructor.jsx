// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";
// import useAxiosHook from "./useAxiosHook";

// const useInstructor = () => {
//     const { user, loading } = useContext(AuthContext);
//     const [axiosSecure] = useAxiosHook();
//     // use axios secure with react query
//     const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
//         queryKey: ["isInstructor", user?.email],
//         enabled: !loading,
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
//             return res.data.admin;
//         },
//     });
//     return [isInstructor, isInstructorLoading];
// };
// export default useInstructor;

import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import useAxiosHook from "./useAxiosHook";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosHook();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(
        ["isInstructor", user?.email],
        {
            enabled: !loading,
            queryFn: async () => {
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return res.data.instructor;
            },
        }
    );
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;

// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../authProvider/AuthProvider";
// import useAxiosHook from "./useAxiosHook";

// const useInstructor = () => {
//     const { user, loading } = useContext(AuthContext);
//     const [axiosSecure] = useAxiosHook();
//     const [isInstructor, setIsInstructor] = useState(false);
//     const [isInstructorLoading, setIsInstructorLoading] = useState(true);

//     useEffect(() => {
//         const fetchIsInstructor = async () => {
//             try {
//                 if (!loading && user) {
//                     const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
//                     setIsInstructor(res.data.admin);
//                     setIsInstructorLoading(false);
//                 }
//             } catch (error) {
//                 console.log("Error fetching instructor status:", error);
//             }
//         };

//         fetchIsInstructor();
//     }, [axiosSecure, loading, user]);

//     return [isInstructor, isInstructorLoading];
// };

// export default useInstructor;
