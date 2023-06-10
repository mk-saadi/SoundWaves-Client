import { Link, Outlet } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";

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
                    className="btn btn-accent rounded-full btn-sm drawer-button lg:hidden w-1/4"
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
                    <ul>
                        <li>home</li>
                        {isAdmin ? (
                            <li>show admin routes</li>
                        ) : isInstructor ? (
                            <li>show instructor routes</li>
                        ) : (
                            <li>show user routes</li>
                        )}
                    </ul>

                    {/* Sidebar content here */}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;

// {isAdmin && (
//     <>
//         <li>
//             <Link to="/dashboard/admin">Admin Dashboard</Link>
//         </li>
//         <li>
//             <Link to="/admin/users">Manage Users</Link>
//         </li>
//         {/* Add more admin-specific links */}
//     </>
// )}
// {isInstructor && (
//     <>
//         <li>
//             <Link to="/dashboard/manageClass">Instructor Dashboard</Link>
//         </li>
//         <li>
//             <Link to="/instructor/courses">Manage Courses</Link>
//         </li>
//         {/* Add more instructor-specific links */}
//     </>
// )}
// {/* Add links for general users */}
// <li>
//     <Link to="/dashboard">Dashboard</Link>
// </li>
// <li>
//     <Link to="/profile">Profile</Link>
// </li>
// {/* Add more general user links */}
