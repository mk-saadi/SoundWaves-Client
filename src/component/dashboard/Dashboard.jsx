import { NavLink, Outlet } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import { BsArrowRightCircleFill } from "react-icons/bs";
import "./dashboard.css";
import { HiUsers } from "react-icons/hi";
import { SiGoogleclassroom } from "react-icons/si";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <div className="drawer lg:drawer-open">
            <input
                id="my-drawer-2"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content flex flex-col">
                <label
                    htmlFor="my-drawer-2"
                    className="bg-accent flex justify-center items-center text-white px-2 cursor-pointer rounded-none drawer-button lg:hidden label-vertical z-40"
                >
                    <BsArrowRightCircleFill />
                </label>
                <div className="ml-10 md:ml-0 sm:ml-10">
                    <Outlet></Outlet>
                </div>
            </div>

            <div className="drawer-side z-50">
                <label
                    htmlFor="my-drawer-2"
                    className="drawer-overlay"
                ></label>
                <ul className="menu w-56 bg-accent-focus text-gray-700 font-semibold h-full border-r-4 border-gray-300">
                    {isAdmin ? (
                        <>
                            <li className="rounded-none">
                                <NavLink
                                    to="/dashboard/adminClass"
                                    className="bg-transparent"
                                >
                                    <button className="flex justify-start items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full">
                                        <SiGoogleclassroom className="text-2xl" />
                                        Manage Class
                                    </button>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/admin"
                                    className="bg-transparent"
                                >
                                    <button className="flex justify-start items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full">
                                        <HiUsers className="text-2xl" />
                                        Manage Users
                                    </button>
                                </NavLink>
                            </li>
                        </>
                    ) : isInstructor ? (
                        <NavLink
                            to="/dashboard/instructorHome"
                            className="bg-transparent"
                        >
                            <button className="flex justify-evenly items-center gap-3 rounded-sm bg-accent py-3 px-4 font-semibold w-full">
                                <SiGoogleclassroom className="text-2xl" />
                                Add a Class
                            </button>
                        </NavLink>
                    ) : (
                        <li>show user routes</li>
                    )}
                    <div className="flex flex-col w-full">
                        <div className="divider"></div>
                    </div>
                    <li>home</li>

                    {/* Sidebar content here */}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
