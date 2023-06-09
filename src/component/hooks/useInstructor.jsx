import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ["isInstructor", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.admin;
        },
    });
    return [isInstructor, isInstructorLoading];
};
export default useAdmin;
