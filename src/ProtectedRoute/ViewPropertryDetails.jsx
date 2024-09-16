import useAuthProvider from "../AuthProvider/useAuthProvider";
import { MdLocationOn } from "react-icons/md";

const ViewPropertryDetails = () => {
  const { viewDetails } = useAuthProvider();
  const { image, estate_title, price, description, location, area, facilities } = viewDetails;

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
          />
        </figure>
        <div className=" flex flex-col gap-5 p-4 -ml-6">
          <h2 className="card-title font-poppins">{estate_title}</h2>
          <p className="text-xl">{description}</p>
          
          <div className="flex items-center font-raleway gap-2">
            <MdLocationOn className="text-2xl"></MdLocationOn>
            <span className="text-xl">{location}</span>
            
          </div>
          <div>
            <h2>Facilities</h2>
            <ol className="">
              {facilities[0] && <li>{facilities[0]}</li>}
              {facilities[1] && <li>{facilities[1]}</li> }
              {facilities[2] && <li>{facilities[2]}</li>}
              {facilities[3] && <li>{facilities[3]}</li>}
              
            </ol>
          </div>
          <div>
            <h2 className="text-xl ">Area: <span className="text-[16px] font-raleway font-normal">{area}</span></h2>
            <p className="text-xl font-raleway">Price: {price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPropertryDetails;
