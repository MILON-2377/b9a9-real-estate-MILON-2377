import { useContext } from "react";
import { AuthContext } from "../AuthProviderContext/AuthProviderContext";


const useAuthProvider = () => {
    const AuthPro = useContext(AuthContext);
    // console.log(AuthPro);
    return AuthPro
};

export default useAuthProvider;