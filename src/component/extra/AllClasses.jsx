import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import axios from "axios";

const AllClasses = () => {
    const cla = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAdd = (cl) => {
        if (!user) {
            alert("Please login first");
            navigate("/login");
            return;
        }

        const classes = {
            classId: cl._id,
            email: user?.email,
            className: cl.className,
            instructor: cl.instructor,
            image: cl.image,
            price: cl.price,
            seats: cl.seats,
            name: user?.displayName,
        };

        axios
            .post("http://localhost:12000/selected", classes)
            .then((response) => {
                console.log(response);
                alert("Class added successfully");
            })
            .catch((error) => {
                console.error("Error adding class", error);
            });
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-14 mx-8">
            {cla.map((cl) => (
                <div
                    key={cl._id}
                    className="card bg-slate-700 shadow-md drop-shadow-md"
                >
                    <figure className="block my-auto">
                        <img
                            src={cl.image}
                            alt=""
                            className="w-full max-h-full object-cover grayscale select-none pointer-events-none shadow-md drop-shadow-md"
                        />
                    </figure>

                    <div className="mx-4 my-2 text-gray-400 relative">
                        <p className="font-bold text-gray-200 mr-16">Class: {cl.className}</p>
                        <p>Instructor: {cl.instructor}</p>
                        <p>Available seats: {cl.seats}</p>
                        <p>Price: ${cl.price}</p>

                        <button
                            className="absolute  z-50 -right-10 bottom-20 btn font-semibold bg-gradient-to-r from-sky-400 to-sky-600 rounded-full text-white shadow-md drop-shadow-md  uppercase shadow-sky-900 border-0"
                            onClick={() => handleAdd(cl)}
                        >
                            Select
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllClasses;
