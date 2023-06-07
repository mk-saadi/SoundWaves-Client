import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
// or
import { Button } from "@mui/material";

const NavBar = () => {
    const navItems = (
        <>
            <li>
                <a>Item 1</a>
            </li>
            <li></li>
            <li>
                <a>Item 3</a>
            </li>
        </>
    );

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link className="normal-case text-xl">daisyUI</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end">
                <Button
                    variant="contained"
                    // onClick={() => {
                    //     alert("clicked");
                    // }}
                    // color="warning"
                    size="small"
                    // className="btn btn-sm no-animation btn-outline btn-info"
                >
                    Button
                </Button>
            </div>
        </div>
    );
};

export default NavBar;
