import { BsArrowUpRight } from "react-icons/bs";
import { GiCampfire } from "react-icons/gi";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";

const Header = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-gray-500">
                <p className="text-gray-300 md:text-4xl text-3xl mb-5">
                    <span className="font-bold">
                        We’re Most Trusted <br />
                        Travel
                    </span>{" "}
                    Partner Around The World
                </p>
                <p className="mb-5">
                    Looking for a way to enhance your musical skills while having a blast this
                    summer? Whether you're a beginner or an experienced musician, these camps offer
                    an immersive experience for individuals of all ages and musical backgrounds.{" "}
                    <br />
                    Discover your true potential and let the melodies of summer ignite your passion
                    for music!
                </p>
                <hr />
                <div className="flex justify-start mt-4 ">
                    <p>
                        <BsArrowUpRight className="text-6xl md:text-7xl text-yellow-600 mr-4" />
                    </p>
                    <p className="text-8xl md:text-9xl text-green-500 font-extrabold">25</p>
                    <div className="text-2xl md:text-4xl font-semibold ml-4 mt-8 text-gray-400">
                        <p className="text-yellow-600">+</p>
                        <p>
                            Years Of <br /> Experience
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative flex gap-10 justify-center">
                <img
                    src="https://images.unsplash.com/photo-1563902242731-bcde8ffa1d36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt=""
                    className="w-40 h-80 md:w-64 md:h-[530px] object-cover"
                />
                <img
                    src="https://images.unsplash.com/photo-1563902315161-7d8184684f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt=""
                    className="w-40 h-80 md:w-64 md:h-[530px] object-cover"
                />
                <label className="swap swap-flip md:text-9xl text-8xl absolute top-1/3 text-white">
                    <input type="checkbox" />

                    <div className="swap-on bg-green-500 p-4 rounded-full drop-shadow-md">
                        <GiCampfire />
                    </div>
                    <div className="swap-off bg-green-500 p-4 rounded-full drop-shadow-md">
                        <RiNeteaseCloudMusicFill />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default Header;
