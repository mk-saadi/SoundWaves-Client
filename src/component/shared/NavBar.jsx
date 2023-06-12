import * as React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import { Avatar, Button, Divider, ListItemIcon, MenuItem } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { GiMusicSpell } from "react-icons/gi";
import "./nav.css";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => {
                console.log(error.message);
            });
    };

    const navItems = (
        <div className="flex gap-3 font-semibold text-gray-300">
            <Link
                className=""
                to="/"
            >
                <button className="">Home</button>
            </Link>

            <Link to="/famousInstructor">
                <button className="">Instructors</button>
            </Link>

            <Link to="/allClasses">
                <button className="">Classes</button>
            </Link>
        </div>
    );

    return (
        <div className="navbar py-3 shadow-md border-b-2 border-gray-300">
            <div className="navbar-start pl-2 sm:pl-6">
                <div className="dropdown z-30">
                    <label
                        className="btn btn-circle btn-info text-white shadow-md swap swap-rotate lg:hidden"
                        tabIndex={0}
                    >
                        <input type="checkbox" />

                        <svg
                            className="swap-off fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                        >
                            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                        </svg>

                        <svg
                            className="swap-on fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 512 512"
                        >
                            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {navItems}
                    </ul>
                </div>
                <Link
                    className="flex justify-center items-center gap-1 normal-case text-xl gradient-text font-bold ml-3"
                    to="/"
                >
                    <GiMusicSpell className="text-2xl text-orange-700" /> SoundWaves
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                            <div>
                                {isAdmin ? (
                                    <>
                                        <Link
                                            to="/dashboard/admin"
                                            className="btn bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full text-white shadow-md drop-shadow-md btn-sm sm:btn-md  text-xs sm:text-sm"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                ) : isInstructor ? (
                                    <>
                                        <Link
                                            to="/dashboard/myClasses"
                                            className="btn bg-gradient-to-r from-sky-400 to-sky-600 rounded-full text-white shadow-md drop-shadow-md btn-sm sm:btn-md  text-xs sm:text-sm"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            className="btn bg-gradient-to-r from-lime-400 to-lime-600 rounded-full text-white shadow-md drop-shadow-md btn-sm sm:btn-md text-xs sm:text-sm"
                                            to="/dashboard/selectedClass"
                                        >
                                            Dashboard
                                        </Link>
                                    </>
                                )}
                            </div>
                            <Tooltip title={user?.displayName}>
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? "account-menu" : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? "true" : undefined}
                                >
                                    <Avatar sx={{ width: 45, height: 45 }}>
                                        <img
                                            src={user?.photoURL}
                                            className="h-14 w-14 object-cover"
                                        />
                                    </Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>

                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            className="bg-gray-900 bg-opacity-30 duration-200"
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                    mt: 1.5,
                                    color: "white",
                                    backgroundColor: "#1d232a",
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    "&:before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform: "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: "right", vertical: "top" }}
                            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                        >
                            <MenuItem
                                onClick={handleClose}
                                className="flex justify-center items-center gap-2
                        "
                            >
                                <img
                                    src={user?.photoURL}
                                    alt=""
                                    className="h-12 w-12 btn-circle object-cover"
                                />{" "}
                                {user?.displayName}
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon></ListItemIcon>
                                Settings
                            </MenuItem>

                            <MenuItem onClick={handleLogOut}>
                                <ListItemIcon></ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                ) : (
                    <Link to="/login">
                        <Button
                            className="btn bg-gradient-to-r from-sky-400 to-sky-600 rounded-full text-white shadow-md drop-shadow-md"
                            sx={{ color: "#fff", fontWeight: "900" }}
                        >
                            login
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;
