import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";
import axios from "axios";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Register = () => {
    const { signUp, updateProfileInfo, logOut, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSignUp = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            toast.error("password must be at least 6 characters long!", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        form.reset();

        signUp(email, password)
            .then((res) => {
                const user = res.user;
                updateProfileInfo(name, photoURL);
                const userDocument = {
                    email: email,
                    name: name,
                    photo: photoURL,
                };

                axios
                    .post("https://sound-waves-taupe.vercel.app/users", userDocument)
                    .then((response) => {
                        console.log("User details stored in the database:", response.data);
                    })
                    .catch((error) => {
                        console.log("Error storing user details in the database:", error);
                    });

                if (user.uid) {
                    toast.success("Account successfully created", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    logOut();
                    navigate("/login");
                }
            })
            .catch((error) => {
                toast.error(error.message, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    const handleGoogleLog = () => {
        googleSignIn()
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <ThemeProvider theme={createTheme()}>
            <Container
                component="main"
                maxWidth="xs"
                className=" bg-sky-600 bg-opacity-60 rounded-md shadow-md my-14 py-4 "
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        // alignItems: "center",
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h4"
                        color={"white"}
                        sx={{ textAlign: "left", mb: 3, ml: 1, fontWeight: "bold" }}
                        className="drop-shadow-md"
                    >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Let's Get
                        <br />
                        Started!
                    </Typography>
                    <hr />
                    <Box
                        component="form"
                        onSubmit={handleSignUp}
                        noValidate
                        sx={{ mt: 3 }}
                    >
                        {/* name */}
                        <TextField
                            margin="normal"
                            inputProps={{ required: true }}
                            required={true}
                            fullWidth
                            label="Your Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            color="info"
                        />
                        {/* photoURL */}
                        <TextField
                            margin="normal"
                            inputProps={{ required: true }}
                            fullWidth
                            label="Your Profile Picture"
                            name="photoURL"
                            autoComplete="url"
                            autoFocus
                            color="info"
                        />
                        {/* email */}
                        <TextField
                            margin="normal"
                            inputProps={{ required: true }}
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            color="info"
                        />

                        {/* password */}
                        <FormControl
                            variant="outlined"
                            className="w-full"
                            sx={{
                                mt: 2,
                                mb: 2,
                                "&:hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.1)",

                                    // border: "none",
                                    // border: "1px solid whitesmoke",
                                },
                            }}
                        >
                            <InputLabel
                                sx={{ color: "whitesmoke" }}
                                htmlFor="outlined-adornment-password"
                            >
                                Password
                            </InputLabel>
                            <OutlinedInput
                                name="password"
                                id="outlined-adornment-password"
                                type={showPassword ? "text" : "password"}
                                color="info"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{ color: "white" }}
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        <Button
                            type="submit"
                            fullWidth
                            className="btn font-semibold bg-gradient-to-r from-sky-400 to-sky-600 w-fit  rounded-full text-white shadow-md drop-shadow-md duration-200"
                            sx={{ mt: 3, mb: 2, color: "white", fontWeight: "bold" }}
                        >
                            Sign Up
                        </Button>
                        <div className="divider font-semibold text-white">OR</div>

                        <div className="flex justify-center items-center gap-6 mb-4">
                            <IconButton
                                onClick={handleGoogleLog}
                                color="primary"
                            >
                                <FcGoogle className="text-2xl" />
                            </IconButton>
                            <IconButton color="info">
                                <FaTwitterSquare className="text-sky-500 text-2xl" />
                            </IconButton>
                            <IconButton color="success">
                                <FaFacebookSquare className="text-2xl text-blue-500" />
                            </IconButton>
                        </div>

                        <Grid>
                            <Grid
                                item
                                className="flex justify-center"
                            >
                                <Link
                                    to="/login"
                                    variant="body2"
                                    className="text-gray-300 text-sm hover:underline cursor-pointer mb-4"
                                >
                                    {"Already have an account? LogIn"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {/* <Typography
                    variant="body2"
                    color="text.secondary"
                    align="center"
                    sx={{ mt: 8, mb: 4 }}
                >
                    {"Copyright © "}
                    <Link
                        color="inherit"
                        href="https://mui.com/"
                    >
                        Your Website
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography> */}
            </Container>
        </ThemeProvider>
    );
};

export default Register;
