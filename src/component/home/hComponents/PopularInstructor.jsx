import axios from "axios";
import { useEffect, useState } from "react";

const PopularInstructor = () => {
    const [instructor, setInstructor] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:12000/users/instructor")
            .then((response) => {
                setInstructor(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching popular classes:", error);
            });
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {instructor
                .slice(0, 6)
                .reverse()
                .map((ins) => (
                    <div
                        key={ins._id}
                        className="drop-shadow-md"
                    >
                        <img
                            src={ins.photo}
                            alt=""
                            className="h-52 w-52 object-cover rounded-full bg-gradient-to-r from-sky-400 to-sky-600 p-1 shadow-md drop-shadow-md mb-4 block mx-auto -skew-y-3"
                        />
                        <div className="text-gray-300 bg-gray-700  -skew-y-3 p-2 shadow-md text-center">
                            <p className="text-lg">{ins.name}</p>
                            <p className="text-lg">{ins.email}</p>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PopularInstructor;
