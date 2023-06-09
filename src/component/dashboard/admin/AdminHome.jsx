// import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import useAxiosHook from "../../hooks/useAxiosHook";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";

// const queryClient = new QueryClient();

const AdminHome = () => {
    const [axiosSecure] = useAxiosHook();
    // const { data: users = [], refetch } = useQuery(["users"], async () => {
    //     const res = await axiosSecure.get("/users");
    //     return res.data;
    // });
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users");
        return res.data;
    });

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     fetch("http://localhost:12000/users")
    //         .then((response) => response.json())
    //         .then((data) => setUsers(data));
    // }, []);

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:12000/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    // refetch();
                    toast.success(`${user.name} is an Admin Now!`, {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            });
    };

    return (
        <>
            <div className="bg-gray-600">
                <p>admin page</p>
                <div>
                    {users.map((user) => (
                        <div
                            key={user._id}
                            className="flex justify-between mx-10 gap-2 "
                        >
                            <p>{user.name}</p>
                            {user.role === "admin" ? (
                                "admin"
                            ) : (
                                <button
                                    onClick={() => handleMakeAdmin(user)}
                                    className="btn btn-info   text-white my-2"
                                >
                                    <FaUserShield></FaUserShield>
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AdminHome;
