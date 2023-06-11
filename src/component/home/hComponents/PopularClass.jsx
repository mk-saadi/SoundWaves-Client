import axios from "axios";
import { useState, useEffect } from "react";
// import axios from "axios";

const PopularClass = () => {
    const [popularClasses, setPopularClasses] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:12000/classes")
            .then((response) => {
                setPopularClasses(response.data);
            })
            .catch((error) => {
                console.error("Error fetching popular classes:", error);
            });
    }, []);
    // console.log(popularClasses);

    // axios("http://localhost:12000/classes");

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularClasses
                .slice(0, 6)
                .reverse()
                .map((classes) => (
                    <div
                        key={classes._id}
                        className=" relative"
                    >
                        <img
                            src={classes.image}
                            alt=""
                            className="md:h-96 md:w-72 sm:h-64 sm:w-auto h-72 w-96 object-cover grayscale  pointer-events-none block mx-auto rounded-md"
                        />
                        <div>
                            <p className="absolute font-semibold sm:top-28 md:top-64 bg-gray-700 text-gray-300 text-3xl left-0 px-2 py-4 top-52 shadow-md drop-shadow-md  -skew-y-3">
                                {classes.className}
                            </p>
                            <p className="text-gray-400 text-lg">
                                Instructor: {classes.instructor}
                            </p>
                            <p className="text-gray-400 text-lg">Price: ${classes.price}</p>
                            <p className="text-gray-400 text-lg">Total Seats: {classes.seats}</p>
                        </div>
                        <div className="divider"></div>
                    </div>
                ))}
        </div>
    );
};

export default PopularClass;
