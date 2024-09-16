import { useLocation, useNavigate } from "react-router-dom";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import EditProfile from "./EditProfile";

const Modal = () => {
  const navigate = useNavigate();
  const { form, setForm, user, } = useAuthProvider();
  const location = useLocation();

  // console.log(location.pathname);

  const handlerNavigate = () => {
    if(user && location.pathname){
      navigate(location.pathname);
    }else{
      navigate("/");
    }
    setForm(1);
  };

  return (
    <dialog id="my_modal_1" className="modal bg-center">
      <div className="modal-box flex flex-col gap-4 w-[80%] h-[80%] md:w-[60%] lg:w-[40%] bg-slate-200">
        <div className="flex items-center ">
          {!user ? (
            <>
              <div
                onClick={() => setForm(1)}
                className={` ${
                  form === 1
                    ? "border-top-right rounded-l-none rounded-b-none"
                    : "border-bottom rounded-b-none rounded-t-none rounded-l-none"
                } text-black cursor-pointer font-semibold font-poppins border-purple-300 px-5 py-1 text-xl rounded-md`}
              >
                Log In
              </div>
              <div
                onClick={() => setForm(2)}
                className={` ${
                  form === 2
                    ? "border-top-left"
                    : "border-bottom rounded-l-none rounded-r-none"
                } border-purple-300 px-5 py-1 font-poppins font-semibold text-xl cursor-pointer`}
              >
                Register
              </div>
            </>
          ) : (
            <>
              {form === 3 && (
                <div
                  className={` ${
                    form === 3
                      ? "border-top-left"
                      : "border-bottom rounded-l-none rounded-r-none"
                  } border-purple-300 px-5 py-1 font-poppins font-semibold text-xl cursor-pointer`}
                >
                  Edit Profile
                </div>
              )}
            </>
          )}
          <div
            className={` ${form && "border-bottom py-[18px]"} flex-1 `}
          ></div>
        </div>
        {user && form === 3 ? (
          <EditProfile></EditProfile>
        ) : form === 1 ? (
          <LogIn></LogIn>
        ) : (
          <Register></Register>
        )}
        <form method="dialog">
          <button
            onClick={handlerNavigate}
            className="btn bg-blue-950 text-white hover:bg-blue-900 float-right"
          >
            Close
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
