import Banner from "./hComponents/Banner";
import "./home.css";

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="mb-8">
                <Banner />
            </div>
            <div>
                <p className="camps md:text-9xl text-5xl">
                    MUSIC CAMPS & <br /> WORKSHOPS
                </p>
            </div>
        </div>
    );
};

export default Home;
