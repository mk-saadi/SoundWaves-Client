import { NavLink, Outlet } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./dashboard.css";
import { HiHome, HiUsers } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <>
            <NavBar />
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col min-h-screen">
                    <label
                        htmlFor="my-drawer-2"
                        className="bg-accent flex justify-center items-center text-white px-2 cursor-pointer rounded-none drawer-button lg:hidden label-vertical z-40 h-screen"
                    >
                        <BsArrowRightCircleFill />
                    </label>
                    <div className="ml-10 md:ml-0 sm:ml-10">
                        <Outlet></Outlet>
                    </div>
                </div>

                <div className="drawer-side z-40">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu w-56 bg-accent-focus text-gray-700 font-semibold h-screen border-r-4 border-gray-300">
                        {isAdmin ? (
                            <>
                                <NavLink
                                    to="/dashboard/adminClass"
                                    className="bg-transparent my-2"
                                >
                                    <button className="flex justify-start items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full border-l-4">
                                        <SiGoogleclassroom className="text-2xl" />
                                        Manage Class
                                    </button>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/admin"
                                    className="bg-transparent my-2"
                                >
                                    <button className="flex justify-start items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full border-l-4">
                                        <HiUsers className="text-2xl" />
                                        Manage Users
                                    </button>
                                </NavLink>
                            </>
                        ) : isInstructor ? (
                            <>
                                <NavLink
                                    to="/dashboard/instructorHome"
                                    className="bg-transparent my-2"
                                >
                                    <button className="flex justify-evenly items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full border-l-4">
                                        <SiGoogleclassroom className="text-2xl" />
                                        Add a Class
                                    </button>
                                </NavLink>
                                <NavLink
                                    to="/dashboard/myClasses"
                                    className="bg-transparent my-2"
                                >
                                    <button className="flex justify-evenly items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full border-l-4">
                                        <SiGoogleclassroom className="text-2xl" />
                                        My Classes
                                    </button>
                                </NavLink>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/dashboard/selectedClass"
                                    className="bg-transparent my-2"
                                >
                                    <button className="flex justify-evenly items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full border-l-4">
                                        <SiGoogleclassroom className="text-2xl" />
                                        Selected Class
                                    </button>
                                </NavLink>
                                <NavLink
                                    to="/dashboard/enrolledClass"
                                    className="bg-transparent my-2"
                                >
                                    <button className="flex justify-evenly items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full border-l-4">
                                        <SiGoogleclassroom className="text-2xl" />
                                        My Classes
                                    </button>
                                </NavLink>
                            </>
                        )}

                        <div className="flex flex-col w-full">
                            <div className="divider"></div>
                        </div>

                        <NavLink
                            to="/"
                            className="bg-transparent"
                        >
                            <button className="flex justify-start items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full">
                                <HiHome className="text-2xl" />
                                Home
                            </button>
                        </NavLink>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;
