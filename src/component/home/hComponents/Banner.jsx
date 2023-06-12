import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Banner = () => {
    const paragraph =
        "Summer is the perfect time for young aspiring musicians to immerse themselves in the world of music. At our highly acclaimed summer music camp, children have the opportunity to explore their musical talents, learn new instruments, and create lifelong memories.";

    const words = paragraph.split(" ");
    const lines = [];
    let currentLine = [];

    words.forEach((word) => {
        if (currentLine.length < 10) {
            currentLine.push(word);
        } else {
            lines.push(currentLine.join(" "));
            currentLine = [word];
        }
    });

    if (currentLine.length > 0) {
        lines.push(currentLine.join(" "));
    }

    return (
        <div className="max-h-[500px] overflow-hidden object-cover">
            <Carousel
                // autoPlay={true}
                infiniteLoop={true}
                className="cursor-pointer text-center"
                swipeable={true}
                emulateTouch={true}
                showArrows={false}
                useKeyboardArrows={true}
            >
                <div className="relative">
                    <img
                        src="https://bgcoceanside.org/wp-content/uploads/2023/04/Summer-Camp-Banner.png"
                        alt=""
                        className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute w-full bg-gradient-to-t from-black to-transparent  bottom-0 h-full select-none pt-[25%] md:pt-[15%] px-10">
                        <div className="drop-shadow-md">
                            <h2 className="text-5xl lg:text-7xl font-bold text-white text-left drop-shadow-md">
                                SoundWaves: <br />
                                Summer Class
                            </h2>
                            {lines.map((line, index) => (
                                <p
                                    key={index}
                                    className="text-xs sm:text-[15px] text-white text-left"
                                >
                                    {line}
                                </p>
                            ))}
                            <div className="flex justify-start gap-3 mt-4">
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        View classes
                                    </Button>
                                </Link>
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-sky-400 to-sky-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{ color: "white", fontWeight: "bold" }}
                                    >
                                        Our Instructors
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        className="w-full h-[500px] object-cover"
                        src="https://www.sjsu.edu/music/pics/summer-camp/summer-camp-banner.png"
                        alt=""
                    />
                    <div className="absolute w-full bg-gradient-to-t from-black to-transparent  bottom-0 h-full select-none pt-[25%] md:pt-[15%] px-10">
                        <div className="drop-shadow-md">
                            <h2 className="text-5xl lg:text-7xl font-bold text-white text-left drop-shadow-md">
                                SoundWaves: <br />
                                Summer Class
                            </h2>
                            {lines.map((line, index) => (
                                <p
                                    key={index}
                                    className="text-xs sm:text-[15px] text-white text-left"
                                >
                                    {line}
                                </p>
                            ))}
                            <div className="flex justify-start gap-3 mt-4">
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Our Instructors
                                    </Button>
                                </Link>
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-sky-400 to-sky-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{ color: "white", fontWeight: "bold" }}
                                    >
                                        View classes
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://cdn.musichouseschool.com/music-summer-camp-lenexa.jpg"
                        alt=""
                        className="w-full h-[500px] object-cover grayscale"
                    />
                    <div className="absolute w-full bg-gradient-to-t from-black to-transparent  bottom-0 h-full select-none pt-[25%] md:pt-[15%] px-10">
                        <div className="drop-shadow-md">
                            <h2 className="text-5xl lg:text-7xl font-bold text-white text-left drop-shadow-md">
                                SoundWaves: <br />
                                Summer Class
                            </h2>
                            {lines.map((line, index) => (
                                <p
                                    key={index}
                                    className="text-xs sm:text-[15px] text-white text-left"
                                >
                                    {line}
                                </p>
                            ))}
                            <div className="flex justify-start gap-3 mt-4">
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Our Instructors
                                    </Button>
                                </Link>
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-sky-400 to-sky-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{ color: "white", fontWeight: "bold" }}
                                    >
                                        View classes
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://i0.wp.com/northvalleymusicschool.org/wp-content/uploads/2022/04/Camp.png?fit=1800%2C1200&ssl=1"
                        alt=""
                        className="w-full h-[500px] object-cover grayscale"
                    />
                    <div className="absolute w-full bg-gradient-to-t from-black to-transparent  bottom-0 h-full select-none pt-[25%] md:pt-[15%] px-10">
                        <div className="drop-shadow-md">
                            <h2 className="text-5xl lg:text-7xl font-bold text-white text-left drop-shadow-md">
                                SoundWaves: <br />
                                Summer Class
                            </h2>
                            {lines.map((line, index) => (
                                <p
                                    key={index}
                                    className="text-xs sm:text-[15px] text-white text-left"
                                >
                                    {line}
                                </p>
                            ))}
                            <div className="flex justify-start gap-3 mt-4">
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Our Instructors
                                    </Button>
                                </Link>
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-sky-400 to-sky-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{ color: "white", fontWeight: "bold" }}
                                    >
                                        View classes
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <img
                        src="https://i0.wp.com/jweekly.com/wp-content/uploads/2017/04/CAMPSbasic-guitars-e1493068497463.jpg?w=1496&crop=0%2C0px%2C100%2C817px&ssl=1"
                        alt=""
                        className="w-full h-[500px] object-cover grayscale"
                    />
                    <div className="absolute w-full bg-gradient-to-t from-black to-transparent  bottom-0 h-full select-none pt-[25%] md:pt-[15%] px-10">
                        <div className="drop-shadow-md">
                            <h2 className="text-5xl lg:text-7xl font-bold text-white text-left drop-shadow-md">
                                SoundWaves: <br />
                                Summer Class
                            </h2>
                            {lines.map((line, index) => (
                                <p
                                    key={index}
                                    className="text-xs sm:text-[15px] text-white text-left"
                                >
                                    {line}
                                </p>
                            ))}
                            <div className="flex justify-start gap-3 mt-4">
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Our Instructors
                                    </Button>
                                </Link>
                                <Link>
                                    <Button
                                        className="btn font-semibold bg-gradient-to-r from-sky-400 to-sky-600 rounded-full text-white shadow-md drop-shadow-md duration-200 uppercase"
                                        sx={{ color: "white", fontWeight: "bold" }}
                                    >
                                        View classes
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
