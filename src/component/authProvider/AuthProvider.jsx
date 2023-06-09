import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
// import axios from "axios";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebasr";
import axios from "axios";

const auth = getAuth(app);

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const updateProfileInfo = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            setUser(currentUser);
            // get and set token
            if (currentUser) {
                axios
                    .post("http://localhost:12000/jwt", { email: currentUser.email })
                    .then((data) => {
                        // console.log(data.data.token)
                        localStorage.setItem("access-token", data.data.token);
                        setLoading(false);
                    });
            } else {
                localStorage.removeItem("access-token");
            }
        });
        return () => {
            return unsubscribe;
        };
    }, []);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const authInfo = {
        user,
        loading,
        signUp,
        signIn,
        googleSignIn,
        logOut,
        updateProfileInfo,
    };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
