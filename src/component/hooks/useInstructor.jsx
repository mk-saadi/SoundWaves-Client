import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import useAxiosHook from "./useAxiosHook";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosHook();
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery(
        ["isInstructor", user?.email],
        {
            enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
            queryFn: async () => {
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return res.data.instructor;
            },
        }
    );
    return [isInstructor, isInstructorLoading];
};

export default useInstructor;
