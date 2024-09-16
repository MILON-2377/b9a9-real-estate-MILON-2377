import useAuthProvider from "../AuthProvider/useAuthProvider";


const Profile = () => {
    const {user} = useAuthProvider();
    const {displayName, email} = user;
    return (
        <div>
            <div>
                <h2>{displayName}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Profile;