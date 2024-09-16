import Navbar from "../Pages/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer";
import Modal from "../components/Modal";
import useAuthProvider from "../AuthProvider/useAuthProvider";

const Root = () => {
  const { loading } = useAuthProvider();

  return (
    <div className="w-[100%]">
      <Navbar></Navbar>
      { loading ? (
        <span className="loading loading-spinner text-secondary"></span>
      ) : (
        <>
          <div className="">
            <Outlet></Outlet>
          </div>
          <Modal></Modal>
        </>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Root;
