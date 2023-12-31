import { AuthContext } from "../../authProvider/AuthProvider";
import { useContext } from "react";
import { ImBoxAdd } from "react-icons/im";
import "./ins.css";

const Instructor = () => {
    const { user } = useContext(AuthContext);

    const handlePost = (event) => {
        event.preventDefault();

        const form = event.target;

        const className = form.className.value;
        const image = form.image.value;
        const email = form.email.value;
        const instructor = form.instructor.value;
        const price = parseFloat(form.price.value);
        const seats = parseFloat(form.seats.value);

        if (seats > 25) {
            alert("The maximum number of seats allowed is 25.");
            return;
        }

        const classes = {
            className: className,
            image: image,
            email: email,
            instructor: instructor,
            price: price,
            seats: seats,
        };
        console.log(classes);

        fetch("https://sound-waves-taupe.vercel.app/classes", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(classes),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    console.log(data);
                    alert("Class added successfully.");
                }
                form.reset();
            });
    };

    return (
        <div>
            <form
                onSubmit={handlePost}
                className="bm-drawer"
            >
                <div className="relative card-body mx-0 px-2 sm:px-6 bg-base-300 rounded-md md:px-24">
                    <p className="text-2xl md:text-3xl text-accent-content font-bold text-left">
                        Add New Class
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-4 pt-10">
                        {/* class Name */}
                        <div className="form-control">
                            <label className="label text-sm">
                                <span className="label-text text-sm text-gray-400">
                                    Class Name*
                                </span>
                            </label>
                            <input
                                type="text"
                                name="className"
                                required
                                placeholder="Guitar Class"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* class Image */}
                        <div className="form-control">
                            <label className="label text-sm">
                                <span className="label-text text-sm text-gray-400">
                                    Class Picture (url)*
                                </span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                required
                                placeholder="www.exampleImage.com"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* seller */}
                        <div className="form-control">
                            <label className="label text-sm">
                                <span className="label-text text-sm text-gray-400">Name*</span>
                            </label>
                            <input
                                type="text"
                                name="instructor"
                                required
                                defaultValue={user?.displayName}
                                readOnly
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label text-sm">
                                <span className="label-text text-sm text-gray-400">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                defaultValue={user?.email}
                                readOnly
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label text-sm">
                                <span className="label-text text-sm text-gray-400">Price*</span>
                            </label>
                            <input
                                type="text"
                                name="price"
                                required
                                placeholder="$99.9"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label text-sm">
                                <span className="label-text text-sm text-gray-400">
                                    Available Seats*
                                </span>
                            </label>
                            <input
                                type="text"
                                name="seats"
                                required
                                placeholder="25"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="text-gray-500 text-sm pb-16">
                            <p>(*) marked fields are mandatory</p>
                        </div>
                    </div>
                    <div className="absolute bottom-4 md:right-24 ">
                        <div className="relative">
                            <input
                                type="submit"
                                className="btn btn-info rounded-full text-white pl-8 pr-4"
                                value="Submit"
                            />
                            <i className="absolute bottom-[17px] left-3 text-white">
                                <ImBoxAdd />
                            </i>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Instructor;
