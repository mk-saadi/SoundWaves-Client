import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";

const Admin = () => {
    return (
        <div className="max-w-[1360px] mx-auto bg-slate-700">
            <NavBar />
            <div className="max-w-7xl mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Admin;
