import useAuthProvider from "../AuthProvider/useAuthProvider";
import { ToastContainer, toast } from "react-toastify";

const EditProfile = () => {

    const {updateUserProfile, modalClose } = useAuthProvider();

    const editUserProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const number = Number(e.target.number.value);
        e.target.reset();

        console.log(name, photo)

        updateUserProfile(name, photo, number)
        .then(() => {
            console.log('update successfully')
            toast("Edit successfully");
            modalClose()
        })
        .catch(error => {
            toast(error.message);
        })
    }

  return (
    <div className="bg-white rounded-lg form-container">
      <form onSubmit={editUserProfile} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <input
            type="text"
            placeholder="Phone Number"
            name="number"
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
            placeholder="photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-blue-950 hover:bg-blue-900 text-white">Submit</button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default EditProfile;
