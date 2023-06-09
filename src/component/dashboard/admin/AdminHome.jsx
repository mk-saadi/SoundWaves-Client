import useAxiosHook from "../../hooks/useAxiosHook";
import { toast } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
// import { FaUserShield } from "react-icons/fa";
import { AuthContext } from "../../authProvider/AuthProvider";

const AdminHome = () => {
    const [axiosSecure] = useAxiosHook();
    const [users, setUsers] = useState([]);
    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();
    console.log(user);

    useEffect(() => {
        axiosSecure
            .get("/users")
            .then((res) => res.data)
            .then((data) => setUsers(data))
            .catch((error) => {
                console.log("Error fetching users:", error);
            });
    }, []);

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:12000/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    alert(`${user.name} is now an Admin`);
                    // refetch();
                    toast.success("is an Admin Now!", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // Update the user's role locally
                    setUsers((prevUsers) =>
                        prevUsers.map((u) => (u._id === user._id ? { ...u, role: "admin" } : u))
                    );
                }
            });
    };

    const handleMakeInstructor = (user) => {
        fetch(`http://localhost:12000/users/instructor/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Account successfully created", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // Update the user's role locally
                    setUsers((prevUsers) =>
                        prevUsers.map((u) =>
                            u._id === user._id ? { ...u, role: "instructor" } : u
                        )
                    );
                }
            });
    };

    return (
        <>
            <div className="bg-gray-600 max-w-[1366px]">
                <div>
                    <div className="overflow-x-auto max-w-[1366px]">
                        <table className="table table-zebra text-gray-300 max-w-[1366px]">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-accent text-base">#</th>
                                    <th className="text-accent text-base">Name</th>
                                    <th className="text-accent text-base">Email</th>
                                    <th className="text-accent text-base">Promote To Admin</th>
                                    <th className="text-accent text-base">Promote To Instructor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td className="text-white">
                                            {user.role === "admin" ? (
                                                <p className="text-white text-base font-semibold bg-blue-400 w-fit  rounded-full py-1 px-4">
                                                    Admin
                                                </p>
                                            ) : (
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className="btn btn-sm rounded-full btn-error   text-white"
                                                >
                                                    Admin?
                                                </button>
                                            )}
                                        </td>
                                        <td className="text-white">
                                            {user.role === "instructor" ? (
                                                <p className="text-white text-base font-semibold bg-blue-400 w-fit  rounded-full py-1 px-4">
                                                    Instructor
                                                </p>
                                            ) : (
                                                <button
                                                    onClick={() => handleMakeInstructor(user)}
                                                    className="btn btn-sm rounded-full btn-info   text-white"
                                                >
                                                    Instructor?
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHome;
