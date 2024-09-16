import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import useAuthProvider from "../AuthProvider/useAuthProvider";

const AllData = ({data}) => {

  const {setViewDetails} = useAuthProvider()
    
    const {image, estate_title, id, price, description, location, area, segment_name, status, facilities} = data;
    

  return (
      <div className="card bg-base-100 h-[600px] shadow-xl">
        <div className="w-full md:h-[300px] ">
          <img className="h-full w-full rounded-xl " src={image} alt="" />
        </div>
        <div className="flex flex-col px-4">
          <div className="flex items-center gap-2">
            <h2 className="card-title">{estate_title}</h2>
            <p className="text-2xl font-bold text-yellow-700">For ({status})</p>
          </div>
          <p>{description}</p>
          <div className="flex items-center gap-2">
              <FaLocationDot className="text-xl"></FaLocationDot>
              <p>{location}</p>
          </div>
          <div className="card-actions ">
            <Link onClick={() => setViewDetails(data)} className="btn bg-blue-950 text-white hover:bg-blue-900" to={`/${id}`}>View Propertry</Link>
          </div>
        </div>
      </div>
  );
};

export default AllData;
