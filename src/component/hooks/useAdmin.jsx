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
