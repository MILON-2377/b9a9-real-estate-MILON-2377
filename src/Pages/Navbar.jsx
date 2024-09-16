import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import useAuthProvider from "../AuthProvider/useAuthProvider";
import "animate.css";
import { FaUserFriends } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut, updateUserProfile, modalShow, setForm} = useAuthProvider();
  const [dropdown, setDropdown] = useState(false);
  const [dashboard, setDashboard] = useState("hidden");



  // update profile
  const hanlderUpdateProfile = (e) => {
    e.preventDefault();
    e.reset();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    updateUserProfile(name, photo).then().catch();
  };


  const navLinks = (
    <>
      <NavLink
    
        className={({ isActive }) =>
          isActive
            ? " px-[12px] py-[10px] rounded-md no-underline text-white font-bold border bg-[#5F9DCD] "
            : "transition-all duration-700 no-underline rounded-md border-nav font-poppins hover:text-white text-slate-800 hover:bg-[#5F9DCDCC] active:text-blue-500 hover:px-3 hover:py-2 text-[18px] "
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        
        className={({ isActive }) =>
          isActive
            ? " px-[12px] py-[10px] rounded-md no-underline text-white font-bold border bg-[#5F9DCD]  "
            : "transition-all duration-700 border-nav rounded-md font-poppins text-slate-800 no-underline hover:text-white hover:bg-[#5F9DCDCC] active:text-blue-500 hover:px-3 hover:py-2 text-[18px] "
        }
        to="/updateprofile"
      >
        Manage Rentals
      </NavLink>
      <NavLink
       
        className={({ isActive }) =>
          isActive
            ? "px-3 py-[10px] rounded-md no-underline text-white  font-bold border bg-[#5F9DCD]  "
            : "transition-all duration-700 text-slate-800 border-nav font-poppins rounded-md no-underline hover:text-white hover:bg-[#5F9DCDCC] hover:px-3 hover:py-2  text-[18px] "
        }
        to="/properties"
      >
        Help
      </NavLink>
      <NavLink
       
        className={({ isActive }) =>
          isActive
            ? " px-3 py-[10px] rounded-md no-underline text-white  font-bold border bg-[#5F9DCD]  "
            : " transition-all duration-700 text-slate-800 border-nav font-poppins  rounded-md no-underline hover:text-white hover:bg-[#5F9DCDCC] active:text-blue-500 hover:px-3 hover:py-2  text-[18px] "
        }
        to="/aboutus"
        title="About us"
      >
        About Us
      </NavLink>
    </>
  );

  // log out
  const handlerLogOut = () => {
    logOut().then(() => {
      console.log("Log Out successful");
    });

    setDashboard("hidden");
    setForm(1);
  };

  const handlerDropDown = () => {
    setDropdown(!dropdown);
    setDashboard("");
  };

  const handlerHideDashBoard = () => {
    setDashboard("hidden");
  };

  // edit profile
  const handlerEditProfile = () => {
    setForm(3);
    document.getElementById("my_modal_1").showModal()
  }



  return (
    <div className="px-4 sticky top-0 bg-gray-50 -mt-2 z-40 text-gray-200 ">
      <div className="navbar text-black px-3 font-poppins">
        <div className="navbar-start">
          <div className="dropdown -ml-8 lg:-ml-0 ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white flex flex-col gap-3 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            className="btn btn-ghost lg:-ml-8 text-black -ml-4 font-bold font-poppins lg:text-3xl"
            to="/"
          >
            Dream to View
          </Link>
          <div className=" hidden lg:flex items-center gap-5">
            <li className="list-none">
              <NavLink
               
                className={({ isActive }) =>
                  isActive
                    ? " px-[12px] py-[10px] rounded-md no-underline text-white font-bold border bg-[#5F9DCD] "
                    : "transition-all duration-700 no-underline font-poppins rounded-md border-nav hover:text-white text-slate-800 hover:bg-[#5F9DCDCC]  hover:px-3 hover:py-2 text-[18px] "
                }
                to="/buy"
              >
                Property Portal
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
                
                className={({ isActive }) =>
                  isActive
                    ? " px-[12px] py-[10px] rounded-md no-underline text-white font-bold border bg-[#5F9DCD] "
                    : "transition-all duration-700 no-underline font-poppins rounded-md border-nav hover:text-white text-slate-800 hover:bg-[#5F9DCDCC]  hover:px-3 hover:py-2 text-[18px] "
                } 
                to="/rent"
              >
                Hospitality Hub
              </NavLink>
            </li>
            <li className="list-none">
              <NavLink
               
                className={({ isActive }) =>
                  isActive
                    ? " px-[12px] py-[10px] rounded-md no-underline text-white font-bold border bg-[#5F9DCD] "
                    : "transition-all duration-700 no-underline font-poppins rounded-md border-nav hover:text-white text-slate-800 hover:bg-[#5F9DCDCC]  hover:px-3 hover:py-2 text-[18px] "
                }
                to="/sell"
              >
                Rent Space
              </NavLink>
            </li>
          </div>
        </div>
        <div className="navbar-end flex items-center gap-5">
          {/* navbar title and navigatin section */}
          <div className={`hidden font-poppins lg:flex items-center gap-5`}>
            {navLinks}
          </div>

          {/* navbar dashboard */}
          <div>
            {user ? (
              <div
                onClick={handlerDropDown}
                className="border border-red-500 cursor-pointer h-[50px] w-[50px] rounded-full mr-4  flex items-center justify-center "
              >
                <img
                  className="w-full h-full rounded-full "
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            ) : (
              <div className="mr-4">
                <div
                  onClick={modalShow}
                  className="no-underline text-white btn bg-blue-950 hover:bg-blue-900 border-none "
                >
                  Log In
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* profile */}
       <div
          className={`${dashboard} ${
            dropdown
              ? "animate__animated animate__slideInRight "
              : "animate__animated animate__slideInRight"
          } h[600px] w-[300px] md:w-[350px] flex gap-1 flex-col px-4 py-5  bg-[#F3F4F6] rounded-md absolute z-50 text-[#333333] right-2 top-1 `}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-[50px] w-[50px] rounded-full">
                <img
                  className="w-full rounded-full h-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <h2 className="uppercase">{user?.displayName}</h2>
            </div>
            <button
              onClick={handlerHideDashBoard}
              className="border-none btn bg-gray-300 cursor-pointer text-[16px] "
            >
              X
            </button>
          </div>
          <div className="flex flex-col  gap-2">
            <div className="flex cursor-pointer px-3 hover:py-1 transition-all duration-500 hover:rounded-md hover:bg-white items-center gap-2 text-xl">
              <FaUserFriends className="text-2xl"></FaUserFriends>
              <Link className="no-underline font-poppins " to='/profile'>Your Profile</Link>
            </div>
            <div
              onClick={handlerEditProfile}
              className="flex cursor-pointer gap-3 px-3 hover:py-2 transition-all duration-500 hover:rounded-md hover:bg-white items-center font-poppins"
            >
              <FaUserEdit className="text-2xl"></FaUserEdit>
              <span onClick={hanlderUpdateProfile} className="font-poppins">
                Eidt Profile
              </span>
            </div>
          </div>

          <hr className="border border-black w-full" />

          <button
            onClick={handlerLogOut}
            className={` btn w-24 bg-blue-950 hover:bg-blue-900 border-[#174A7E] hover:text-white text-[#FFFFFF] `}
          >
            Log Out
          </button>
        </div>
    </div>
  );
};

export default Navbar;
