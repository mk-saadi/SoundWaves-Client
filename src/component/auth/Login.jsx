import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { OutlinedInput } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

function Login() {
    const { signIn, googleSignIn } = useContext(AuthContext);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

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

        signIn(email, password)
            .then((res) => {
                const user = res.user;

                if (user.uid) {
                    toast.success("Successfully Logged In", {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    // navigate(from, { replace: true });
                }
            })
            .catch((error) => {
                console.log(error.message);
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
                        Welcome
                        <br />
                        Back!
                    </Typography>
                    <hr />
                    <Box
                        component="form"
                        onSubmit={handleLogin}
                        noValidate
                        className="mt-3"
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            color="info"
                        />
                        <FormControl
                            variant="outlined"
                            className="w-full"
                            sx={{ mt: 2, fontFamily: "Montserrat" }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                name="password"
                                color="info"
                                id="outlined-adornment-password"
                                type={showPassword ? "text" : "password"}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            sx={{ color: "white" }}
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
                            Login
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
                                    to="/register"
                                    variant="body2"
                                    className="text-gray-300 text-sm hover:underline cursor-pointer mb-4"
                                >
                                    {"Don't have an account? Sign Up"}
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
}

export default Login;
