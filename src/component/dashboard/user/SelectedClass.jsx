import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import { AiFillDelete } from "react-icons/ai";
import { MdPayments } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

const SelectedClass = () => {
    const { user } = useContext(AuthContext);
    const [cla, setCla] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = `https://sound-waves-taupe.vercel.app/selected?email=${user?.email}`;

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setCla(data);
                setLoading(false);
            });
    }, [url]);

    const total = cla.reduce((sum, item) => item.price + sum, 0).toFixed(2);

    const handleDelete = (id) => {
        event.preventDefault();

        const confirmDelete = window.confirm("Are you sure you want to delete this class?");

        if (confirmDelete) {
            axios
                .delete(`https://sound-waves-taupe.vercel.app/selected/${id}`)
                .then((response) => {
                    console.log(response);
                    setCla(cla.filter((cl) => cl._id !== id));
                    alert("Class deleted successfully");
                })
                .catch((error) => {
                    console.error("Error deleting class", error.message);
                });
        }
    };

    return (
        <div className="ml-0 sm:ml-8 lg:ml-0">
            <div className="border-2">
                <img
                    src={user.photoURL}
                    alt=""
                    className="w-28 h-auto rounded-full p-1 drop-shadow-md shadow-md ml-8  border-gradient"
                />
            </div>
            <div className="overflow-x-auto min-h-screen mx-auto">
                {loading ? (
                    <div className="flex items-center justify-center h-screen">
                        <span className="loading loading-bars  h-32 w-32"></span>
                    </div>
                ) : (
                    <table className="table w-full  max-w-[1366px]">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Class</th>
                                <th>Price</th>
                                <th>Payment</th>
                                <th>Remove Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cla.map((cl, index) => (
                                <tr
                                    key={cl._id}
                                    className="hover"
                                >
                                    <td>{index + 1}</td>
                                    <td className="flex flex-col gap-1">
                                        {cl.className} <br />{" "}
                                        <span className="badge badge-ghost badge-md">
                                            Instructor: {cl.instructor}
                                        </span>
                                    </td>
                                    <td>${cl.price}</td>
                                    <td>
                                        <Link to={`/dashboard/payment/${cl._id}`}>
                                            <button className="btn bg-green-500 border-green-500 hover:bg-green-500 hover:border-green-500 border-2 btn-xs sm:btn-sm rounded-full text-white text-xs flex justify-center items-center gap-2 flex-nowrap">
                                                Pay <MdPayments className="text-lg" />
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            className="btn bg-red-500 border-red-500 hover:bg-red-500 hover:border-red-500 border-2 btn-xs sm:btn-sm rounded-full text-white text-xs flex justify-center items-center gap-2 flex-nowrap"
                                            onClick={() => handleDelete(cl._id)}
                                        >
                                            Delete <AiFillDelete className="text-lg" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default SelectedClass;
