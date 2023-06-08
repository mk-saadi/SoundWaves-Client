import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css";

const Banner = () => {
    return (
        <div className="max-h-[500px] overflow-hidden object-cover">
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                className="cursor-grab text-center"
                swipeable={true}
                emulateTouch={true}
                // showArrows={false}
                useKeyboardArrows={true}
            >
                <div>
                    <img
                        src="https://bgcoceanside.org/wp-content/uploads/2023/04/Summer-Camp-Banner.png"
                        alt=""
                        className="w-full h-[500px] object-cover"
                    />
                </div>
                <div>
                    <img
                        className="w-full h-[500px] object-cover"
                        src="https://www.sjsu.edu/music/pics/summer-camp/summer-camp-banner.png"
                        alt=""
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.musichouseschool.com/music-summer-camp-lenexa.jpg"
                        alt=""
                        className="w-full h-[500px] object-cover grayscale"
                    />
                </div>
                <div>
                    <img
                        src="https://i0.wp.com/northvalleymusicschool.org/wp-content/uploads/2022/04/Camp.png?fit=1800%2C1200&ssl=1"
                        alt=""
                        className="w-full h-[500px] object-cover grayscale"
                    />
                </div>
                <div>
                    <img
                        src="https://i0.wp.com/jweekly.com/wp-content/uploads/2017/04/CAMPSbasic-guitars-e1493068497463.jpg?w=1496&crop=0%2C0px%2C100%2C817px&ssl=1"
                        alt=""
                        className="w-full h-[500px] object-cover grayscale"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;

// https://bgcoceanside.org/wp-content/uploads/2023/04/Summer-Camp-Banner.png
