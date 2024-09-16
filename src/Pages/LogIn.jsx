import { useForm } from "react-hook-form";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../FirebaseAuth/firebase.config";

const LogIn = () => {
  const { register, handleSubmit, reset } = useForm();
  const { logInUser, modalClose, } = useAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  // console.log(location);

  // log in with email and password
  const hanlderLogIn = (email, password) => {
    reset();
    logInUser(email, password)
      .then(() => {
        toast("Log In Successfull");
        modalClose();
        location.pathname ? navigate(location.pathname) : navigate('/');
      })
      .catch((error) => {
        toast(error.message);
        
      });
  };


  // log in with social media
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handlerGoogLogIn = () => {
      signInWithPopup(auth, googleProvider)
      .then(() => {
        toast("Log In Successfull");
        modalClose();
        location.pathname ? navigate(location.pathname) : navigate('/');
      })
      .catch((error) => {
        toast(error.message)
        console.log(error.message);
      });
  };

  const handlerGithubLogIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(() => {
        toast("Log In Successfull");
        modalClose();
        location.pathname ? navigate(location.pathname) : navigate('/');
      })
      .catch((error) => {
        toast(error.message);
        console.log(error.message);
      });
  };

  return (
    <div className="card shrink-0 w-full max-w-sm form-container">
      <form
        onSubmit={handleSubmit((data) => {
          const { email, password } = data;
          hanlderLogIn(email, password);
        })}
        className="card-body"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-950 text-white hover:bg-blue-900 hover:text-white">
            Log In
          </button>
        </div>

        <div className="w-full">
          <div className="flex flex-col items-center justify-center w-[80%]mx-auto gap-3">
            <div
              onClick={handlerGoogLogIn}
              className="h-[30px] w-full py-1 px-1 flex items-center bg-slate-200 rounded-full text-xl cursor-pointer border-purple-400 "
            >
              
              <FaGoogle className="text-green-500 ml-2"></FaGoogle>
              <p className="ml-[100px]">Google</p>
            </div>
            <div
              onClick={handlerGithubLogIn}
              className="h-[30px] w-full py-1 px-1 flex items-center bg-slate-200 cursor-pointer text-xl rounded-full border-purple-400 "
            >
              <FaGithub className="text-black ml-2"></FaGithub>
              <p className="ml-[100px]">GitHub</p>
            </div>
          </div>
        </div>
      </form>
      <div>
        <ToastContainer>
        </ToastContainer>
      </div>
    </div>
  );
};

export default LogIn;
