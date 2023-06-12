import useAxiosHook from "../../hooks/useAxiosHook";
import { toast } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { RiAdminFill, RiUser2Fill } from "react-icons/ri";
import "./manage.css";

const AdminHome = () => {
    const [axiosSecure] = useAxiosHook();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const { user } = useContext(AuthContext);
    // const navigate = useNavigate();
    const [adminCount, setAdminCount] = useState(0);
    const [instructorCount, setInstructorCount] = useState(0);
    const sortedUsers = [...users];

    useEffect(() => {
        setLoading(true);
        axiosSecure
            .get("/users")
            .then((res) => res.data)
            .then((data) => {
                setUsers(data);
                setAdminCount(data.filter((user) => user.role === "admin").length);
                setInstructorCount(data.filter((user) => user.role === "instructor").length);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching users:", error);
            });
    }, []);

    const handleMakeAdmin = (user) => {
        fetch(`https://sound-waves-taupe.vercel.app/users/admin/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount) {
                    alert(`${user.name} is now an Admin`);
                    toast.success("is an Admin Now!", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setUsers((prevUsers) =>
                        prevUsers.map((u) => (u._id === user._id ? { ...u, role: "admin" } : u))
                    );
                }
            });
    };

    const handleMakeInstructor = (user) => {
        fetch(`https://sound-waves-taupe.vercel.app/users/instructor/${user._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert(`${user.name} is now an Instructor`);
                    toast.success("Account successfully created", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setUsers((prevUsers) =>
                        prevUsers.map((u) =>
                            u._id === user._id ? { ...u, role: "instructor" } : u
                        )
                    );
                }
            });
    };

    sortedUsers.sort((a, b) => {
        if (a.role === "admin" && b.role !== "admin") {
            return -1;
        } else if (a.role !== "admin" && b.role === "admin") {
            return 1;
        } else if (a.role === "instructor" && b.role !== "admin" && b.role !== "instructor") {
            return -1;
        } else if (a.role !== "admin" && a.role !== "instructor" && b.role === "instructor") {
            return 1;
        } else {
            return 0;
        }
    });

    return (
        <div className="bg-gray-600">
            <div className="overflow-x-auto w-full">
                <p className="text-2xl font-semibold text-accent-content text-center">
                    Manage Users
                </p>
                <div className="flex justify-around items-center mt-6">
                    <div className="flex gap-14 items-center">
                        <img
                            src={user.photoURL}
                            alt=""
                            className="w-28 h-auto rounded-full p-1 drop-shadow-md shadow-md ml-8  border-gradient"
                        />
                        <div>
                            <p className="text-gray-300">Name: {user.displayName}</p>
                            <p className="text-gray-300">Email: {user.email}</p>
                            <p className="text-gray-300">
                                Role: {user.role === "admin" ? "Instructor" : "Admin"}
                            </p>
                        </div>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="-ml-24 text-gray-300">
                        <p>Total Account: {users.length}</p>
                        <p>Total Admins: {adminCount}</p>
                        <p>Total Instructors: {instructorCount}</p>
                        <p>Total Students: {users.length - adminCount - instructorCount}</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <div className="divider"></div>
                </div>
                {loading ? (
                    <div className="flex items-center justify-center h-screen">
                        <span className="loading loading-bars  h-32 w-32"></span>
                    </div>
                ) : (
                    // Show the table when loading is false
                    <table className="table table-zebra text-gray-300 w-full">
                        <thead>
                            <tr>
                                <th className="text-accent text-sm md:text-xs">#</th>
                                <th className="text-accent text-sm md:text-xs">Name</th>
                                <th className="text-accent text-sm md:text-xs">Email</th>
                                <th className="text-accent text-sm md:text-xs">Promote To Admin</th>
                                <th className="text-accent text-sm md:text-xs">
                                    Promote To Instructor
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedUsers.map((user, index) => (
                                <tr
                                    key={user._id}
                                    className="text-xs md:text-xs"
                                >
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="text-white">
                                        {user.role === "admin" ? (
                                            <p className="text-white md:text-xs text-xs font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 w-fit  rounded-full py-1 px-4 flex items-center gap-2 cursor-not-allowed select-none shadow-md drop-shadow-md">
                                                <RiAdminFill className="text-white text-sm" />
                                                Admin
                                            </p>
                                        ) : (
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="bg-white rounded-full text-gray-600 md:text-sm font-semibold px-4 py-px w-fit focus:scale-95 duration-150 text-xs"
                                            >
                                                Admin?
                                            </button>
                                        )}
                                    </td>
                                    <td className="text-white">
                                        {user.role === "instructor" ? (
                                            <p className="text-white md:text-xs text-xs font-semibold bg-gradient-to-r from-sky-400 to-sky-600 w-fit  rounded-full py-1 px-4 flex items-center gap-2 cursor-not-allowed select-none shadow-md drop-shadow-md">
                                                <RiUser2Fill className="text-white text-sm" />
                                                Instructor
                                            </p>
                                        ) : (
                                            <button
                                                disabled={user.role === "admin"}
                                                onClick={() => handleMakeInstructor(user)}
                                                className={`rounded-full text-gray-600 md:text-sm font-semibold px-4 py-px w-fit focus:scale-95 duration-150 text-xs ${
                                                    user.role === "admin"
                                                        ? "cursor-not-allowed select-none bg-gray-500"
                                                        : "bg-white"
                                                }`}
                                            >
                                                Instructor?
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                {/* <table className="table table-zebra text-gray-300 w-full">
                    <thead>
                        <tr>
                            <th className="text-accent text-sm md:text-xs">#</th>
                            <th className="text-accent text-sm md:text-xs">Name</th>
                            <th className="text-accent text-sm md:text-xs">Email</th>
                            <th className="text-accent text-sm md:text-xs">Promote To Admin</th>
                            <th className="text-accent text-sm md:text-xs">
                                Promote To Instructor
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedUsers.map((user, index) => (
                            <tr
                                key={user._id}
                                className="text-xs md:text-xs"
                            >
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className="text-white">
                                    {user.role === "admin" ? (
                                        <p className="text-white md:text-xs text-xs font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 w-fit  rounded-full py-1 px-4 flex items-center gap-2 cursor-not-allowed select-none shadow-md drop-shadow-md">
                                            <RiAdminFill className="text-white text-sm" />
                                            Admin
                                        </p>
                                    ) : (
                                        <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="bg-white rounded-full text-gray-600 md:text-sm font-semibold px-4 py-px w-fit focus:scale-95 duration-150 text-xs"
                                        >
                                            Admin?
                                        </button>
                                    )}
                                </td>
                                <td className="text-white">
                                    {user.role === "instructor" ? (
                                        <p className="text-white md:text-xs text-xs font-semibold bg-gradient-to-r from-sky-400 to-sky-600 w-fit  rounded-full py-1 px-4 flex items-center gap-2 cursor-not-allowed select-none shadow-md drop-shadow-md">
                                            <RiUser2Fill className="text-white text-sm" />
                                            Instructor
                                        </p>
                                    ) : (
                                        <button
                                            disabled={user.role === "admin"}
                                            onClick={() => handleMakeInstructor(user)}
                                            className={`bg-white rounded-full text-gray-600 md:text-sm font-semibold px-4 py-px w-fit focus:scale-95 duration-150 text-xs ${
                                                user.role === "admin"
                                                    ? "cursor-not-allowed select-none bg-gray-400"
                                                    : ""
                                            }`}
                                        >
                                            Instructor?
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
            </div>
        </div>
    );
};

export default AdminHome;
