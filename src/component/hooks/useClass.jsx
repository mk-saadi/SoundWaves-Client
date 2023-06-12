import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import useAxiosHook from "./useAxiosHook";

const useClass = () => {
    const { user, loading } = useContext(AuthContext);
    const [axiosSecure] = useAxiosHook();
    const { refetch, data: classes = [] } = useQuery({
        queryKey: ["selected", user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem("access-token"),
        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`);
            console.log("res from axios", res);
            return res.data;
        },
    });

    return [classes, refetch];
};
export default useClass;
