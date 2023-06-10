import { toast } from "react-hot-toast";
import { AuthContext } from "../../authProvider/AuthProvider";
import { useContext } from "react";
import { BsQuestionSquareFill } from "react-icons/bs";

const Instructor = () => {
    const { user } = useContext(AuthContext);

    const handlePost = (event) => {
        event.preventDefault();

        const form = event.target;
        const img = form.img.value; // const img = form.img.value.split(",").map(url => url.trim()); // array of img urls
        const email = form.email.value;
        const name = form.name.value;
        const price = parseFloat(form.price.value);
        const quantity = parseFloat(form.quantity.value);
        const description = form.description.value;
        const seller = form.seller.value;
        const Manufacturer = form.Manufacturer.value;
        const category = form.category.value;
        const rating = parseFloat(form.ratings.value);

        const figure = {
            img: img,
            email: email,
            name: name,
            price: price,
            quantity: quantity,
            seller: seller,
            description: description,
            Manufacturer: Manufacturer,
            category: category,
            rating: rating,
        };

        fetch("https://server-anime-fig-mk-saadi.vercel.app/addedFigure", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(figure),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.success("Your new booking was successfully added.", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
                form.reset();
            });
    };

    return (
        <div className="bg-gray-800">
            <form
                onSubmit={handlePost}
                className=""
            >
                <div className="relative card-body mx-0 px-2 sm:px-6 bg-base-300 rounded-md md:px-24">
                    <p className="text-2xl text-error font-bold text-left">
                        Add New Figure To Database
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 md:gap-4 pt-10">
                        {/* seller */}
                        <div className="form-control">
                            <input
                                type="text"
                                name="seller"
                                required
                                defaultValue={user?.displayName}
                                placeholder="seller's name"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* last name */}
                        <div className="form-control">
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="product name"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* phone */}
                        <div className="form-control">
                            <input
                                type="email"
                                name="email"
                                required
                                defaultValue={user?.email}
                                placeholder="seller's email"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <input
                                type="text"
                                name="price"
                                required
                                placeholder="product price ($)"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="Manufacturer"
                                required
                                placeholder="manufacturer"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="url"
                                name="img" // array of img url
                                required
                                placeholder="product image"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="ratings"
                                required
                                placeholder="rating (number)"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <div className="form-control">
                            <input
                                type="text"
                                name="quantity"
                                required
                                placeholder="quantity"
                                className="text-sm sm:text-base text-slate-100 input input-bordered bg-gray-600 rounded-sm"
                            />
                        </div>
                        <select
                            className="select select-info  rounded-sm bg-gray-600"
                            name="category"
                        >
                            <option
                                disabled
                                selected
                            >
                                products sub-category
                            </option>
                            <option className="text-xs">Nendoroid</option>
                            <option className="text-xs">Figma</option>
                            <option className="text-xs">Scale Figures</option>
                            <option className="text-xs">Bishoujo Figures</option>
                        </select>
                        <div>
                            <div className="dropdown dropdown-hover">
                                <label
                                    tabIndex={0}
                                    className="btn btn-circle btn-ghost btn-xs text-info"
                                >
                                    <BsQuestionSquareFill className="text-xl" />
                                </label>
                                <div
                                    tabIndex={0}
                                    className="card compact dropdown-content shadow bg-base-100 rounded-sm"
                                >
                                    <div className="py-3 px-2 text-[9px] sm:text-xs md:w-80 sm:w-64 w-48">
                                        <p>
                                            <span className="text-info">Nendoroid:</span>{" "}
                                            Chibi-style figures with a cute and deformed design,
                                            featuring interchangeable faces, accessories, and poses.
                                        </p>
                                        <p>
                                            <span className="text-info">Figma:</span> Articulated
                                            action figures with high poseability and interchangeable
                                            parts.
                                        </p>
                                        <p>
                                            <span className="text-info">Scale Figures:</span>{" "}
                                            Detailed and meticulously crafted anime figures in
                                            various scales, capturing characters with lifelike
                                            accuracy.
                                        </p>
                                        <p>
                                            <span className="text-info">Bishoujo Figures:</span>{" "}
                                            Anime figures focusing on the beauty and allure of
                                            female characters.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pb-10 pt-4">
                        <textarea
                            name="description"
                            required
                            className="text-slate-200 textarea textarea-info rounded-sm bg-gray-600 w-full min-h-[10rem]"
                            placeholder="Product Description"
                        ></textarea>
                    </div>
                    <input
                        type="submit"
                        className="absolute bottom-4 md:right-24 btn btn-info rounded-sm text-white"
                        value="Submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default Instructor;
