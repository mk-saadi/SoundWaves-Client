import { Link } from "react-router-dom";
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
                <h2 className="text-4xl mb-3 text-gray-300 font-bold">Popular Classes</h2>
                <p className="text-gray-500 mb-6">
                    Discover the joy of music at our popular music classes. Here you'll explore
                    various instruments, learn music theory, and develop your musical skills.
                    <br />
                    Whether you're a beginner or an experienced musician, our classes offer a
                    dynamic and engaging environment to enhance your musical journey. Join us today
                    and unlock your musical potential!
                </p>
                <PopularClass />
                <Link to="/allClasses">
                    <button>View All Classes</button>
                </Link>
            </div>
            <div className="mb-8 mx-8">
                <h2 className="text-4xl mb-3 text-gray-300 font-bold">Popular Instructors</h2>
                <p className="text-gray-500 mb-6">
                    Our exceptional music instructors are passionate about teaching and dedicated to
                    helping you unleash your musical talent. With their expertise and guidance,
                    you'll receive personalized instruction tailored to your goals and skill level.{" "}
                    <br />
                    Join our community of talented musicians and embark on an enriching learning
                    experience with our incredible music instructors.
                </p>
                <PopularInstructor />
            </div>
        </div>
    );
};

export default Home;
