import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { toast } from "react-hot-toast";
import axios from "axios";

const Register = () => {
    const { signUp, updateProfileInfo, logOut, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

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

                // Send HTTP request to backend API endpoint
                axios
                    .post("http://localhost:12000/users", userDocument)
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
                className="min-h-screen"
            >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography
                        component="h1"
                        variant="h3"
                        color={"white"}
                    >
                        Register
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSignUp}
                        noValidate
                        sx={{ mt: 1 }}
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
                        />

                        {/* password */}
                        <TextField
                            margin="normal"
                            inputProps={{ required: true }}
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Register
                        </Button>
                        <Grid>
                            <Grid
                                item
                                className="flex justify-end"
                            >
                                <Link
                                    to="/login"
                                    variant="body2"
                                    className="text-blue-500 hover:underline cursor-pointer"
                                >
                                    {"Already have an account? LogIn"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button onClick={handleGoogleLog}>Google</Button>
                </Box>
                <Typography
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
                </Typography>
            </Container>
        </ThemeProvider>
    );
};

export default Register;
