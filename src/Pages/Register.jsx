import { useForm } from "react-hook-form";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa6";
import { useState } from "react";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const {
    createUser,
    updateUserProfile,
    registerError,
    setRegisterError,
    modalClose,
  } = useAuthProvider();
  const [showPass, setShowPass] = useState(false);

  const hanlderSignUp = ({ email, password, name, photo }) => {
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password)
    ) {
      toast(
        `!! Password must be at least one uppercase one lowercase and one character!`
      );
      return;
    }

    setRegisterError("");

    createUser(email, password)
      .then(() => {
        updateUserProfile(name, photo).then(() => {
          toast("Account create successfully!!");
          modalClose();
        });
      })
      .catch((error) => {
        console.log(error.message);
        setRegisterError(error.message);
      });

    reset();
  };

  return (
    <div>
      <div className="card form-container relative w-full max-w-sm">
        <form
          onSubmit={handleSubmit((data) => {
            hanlderSignUp(data);
          })}
          className="card-body"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
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
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo"
              className="input input-bordered"
              {...register("photo")}
              required
            />
          </div>
          <div className="form-control">
            <label className="label relative">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              {...register("password", { required: true })}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <div
              onClick={() => setShowPass(!showPass)}
              className=" z-20 relative -top-[33px] left-[220px] sm:left-[290px] "
            >
              {showPass ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </div>
            <div>
              <p className="text-red-400">{registerError}</p>
            </div>
          </div>
          <div className="form-control ">
            <button className="btn bg-blue-950 hover:bg-blue-900 border-none text-white">
              Register
            </button>
          </div>
        </form>
      </div>
      <div>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Register;
