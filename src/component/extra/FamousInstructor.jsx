import { useLoaderData } from "react-router-dom";

const FamousInstructor = () => {
    const ins = useLoaderData();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 py-16">
            {ins
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
                            className="h-52 w-52 object-cover rounded-full bg-gradient-to-r from-sky-400 to-sky-600 p-1 shadow-md drop-shadow-md mb-4 block mx-auto"
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

export default FamousInstructor;
