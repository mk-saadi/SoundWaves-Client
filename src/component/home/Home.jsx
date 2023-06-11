import Banner from "./hComponents/Banner";
import PopularClass from "./hComponents/PopularClass";
import PopularInstructor from "./hComponents/PopularInstructor";
import "./home.css";

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="mb-8">
                <Banner />
            </div>
            <div>
                <p className="camps md:text-9xl text-6xl">
                    MUSIC CAMPS & <br /> WORKSHOPS
                </p>
            </div>
            <div className="my-16 mx-8">
                <PopularClass />
            </div>
            <div className="mb-8">
                <p>Popular Instructors</p>
                <PopularInstructor />
            </div>
        </div>
    );
};

export default Home;
