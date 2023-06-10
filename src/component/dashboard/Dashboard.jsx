import { Link, Outlet } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="drawer lg:drawer-open">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <label
                        htmlFor="my-drawer-2"
                        className="btn btn-primary drawer-button lg:hidden"
                    >
                        Open drawer
                    </label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        {isAdmin && (
                            <>
                                <li>
                                    <Link to="/dashboard/admin">Admin Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/admin/users">Manage Users</Link>
                                </li>
                                {/* Add more admin-specific links */}
                            </>
                        )}
                        {isInstructor && (
                            <>
                                <li>
                                    <Link to="/dashboard/manageClass">Instructor Dashboard</Link>
                                </li>
                                <li>
                                    <Link to="/instructor/courses">Manage Courses</Link>
                                </li>
                                {/* Add more instructor-specific links */}
                            </>
                        )}
                        {/* Add links for general users */}
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        {/* Add more general user links */}
                    </ul>
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default Dashboard;
