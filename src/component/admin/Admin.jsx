import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar";
import Footer from "../shared/Footer";
import { Toaster } from "react-hot-toast";

const Admin = () => {
    return (
        <div className="max-w-[1360px] mx-auto bg-slate-800">
            <NavBar />
            <div className="max-w-7xl mx-auto border-r-2 border-l-2 border-slate-600 px-1">
                <Outlet />
            </div>
            <Footer />
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        border: "1px solid #713200",
                        padding: "16px",
                        color: "#713200",
                        fontWeight: "bolder",
                    },
                    success: {
                        duration: 3000,
                        theme: {
                            primary: "green",
                            secondary: "blue",
                        },
                    },
                }}
            />
        </div>
    );
};

export default Admin;
