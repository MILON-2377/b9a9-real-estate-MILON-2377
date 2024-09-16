
import useAuthProvider from "../AuthProvider/useAuthProvider";

const ProtectedRoute = ({children}) => {

    const {user, modalShow} = useAuthProvider();

    if(!user) {
       modalShow();
       return;
    }else{
        return children;
    }
};

export default ProtectedRoute;