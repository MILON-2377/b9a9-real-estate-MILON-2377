
import resort from '../assets/images/empty-lounge-area-hotel-lobby.jpg';
import rental from '../assets/images/hand-holding-keys-outdoors.jpg';
import motel from '../assets/images/leisure-beautiful-health-garden-landscape.jpg';
import hotel from '../assets/images/swimming-pool.jpg';
import image4 from '../assets/images/empty-lounge-area-hotel-lobby.jpg';

const Features = () => {
  return (
    <div className="font-poppins grid grid-cols-1 lg:w-[80%] gap-5 lg:grid-cols-3 mt-[56px] mb-[56px]">
      <div style={{backgroundImage: `url('${resort}')`}} className="card w-full h-[400px] bg-no-repeat bg-center bg-base-100 shadow-xl">
      </div>
      <div style={{backgroundImage: `url('${hotel}')`}} className="card w-full h-[400px] bg-no-repeat bg-center bg-base-100 shadow-xl">
      </div>
      <div style={{backgroundImage: `url('${motel}')`}} className="card w-full h-[400px] bg-no-repeat bg-center bg-base-100 shadow-xl">

      </div>
      <div style={{backgroundImage: `url('${rental}')`}} className="card w-full h-[400px] bg-no-repeat bg-center bg-base-100 shadow-xl">
      </div>
      <div style={{backgroundImage: `url('${image4}')`}} className="card w-full h-[400px] bg-no-repeat bg-center bg-base-100 shadow-xl">
      </div>
      <div style={{backgroundImage: "url('https://img.freepik.com/premium-photo/resort-villas-with-pool-summer_379858-15986.jpg?w=1060')"}} className="card bg-center bg-no-repeat w-full h-[400px] bg-base-100 shadow-xl">
      </div>
    </div>
  );
};

export default Features;
