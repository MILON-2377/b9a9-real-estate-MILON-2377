import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../FirebaseAuth/firebase.config";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null);

const AuthProviderContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [registerError, setRegisterError] = useState("");
    const [viewDetails, setViewDetails] = useState();
    const [form, setForm] = useState(1);
    const [ourService, setOurServie] = useState('Hotel');
    const [loading, setLoading] = useState(true);
    // const [getTitle, setGetTitle] = useState("");


    // create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user log in with email and password
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // userLog in with social media
   
    // isUser loggedIn 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            
            currentUser && 
                setUser(currentUser) 
                setLoading(false);
        })

        return () => unSubscribe();
    },[])

    // update profile
    const updateUserProfile = (name, photo, number) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            phoneNumber: number,
        })
    }

    const logOut = () => {
        setUser(null);
        return signOut(auth);
    }

    // modal open
    const modalShow = () => {
        document.getElementById("my_modal_1").showModal()
    }

    // modal close
    const modalClose = () => {
        document.getElementById("my_modal_1").close();
    }


    const authInfo = {
        createUser,
        logInUser,
        user,
        logOut,
        updateUserProfile,
        setRegisterError,
        registerError,
        setViewDetails,
        viewDetails,
        modalShow,
        modalClose,
        setForm,
        form,
        setOurServie,
        ourService,
        loading,
    }

    console.log(user);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviderContext;
AuthProviderContext.propTypes = {
    children: PropTypes.node,
}