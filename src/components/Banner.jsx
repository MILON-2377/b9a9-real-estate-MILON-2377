

const Banner = () => {

  return (
    <div>
      <div className="carousel h-[400px] w-full">
        <div style={{backgroundImage: "url('https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?t=st=1712897224~exp=1712900824~hmac=644f75d3f59dc04950ea5b38007965c00b2f74871a5dafbcbe586671560cdd70&w=1060')"}} 
        id="slide1" 
        className="carousel-item bg-center relative h-full w-full">
           
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div style={{backgroundImage: "url('https://img.freepik.com/premium-photo/i-put-bookshelf-middle-room-divide-space_641764-751.jpg?w=1060')"}} 
        id="slide2" 
        className="carousel-item bg-center relative flex items-center justify-center h-full w-full">
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div style={{backgroundImage: "url('https://img.freepik.com/premium-photo/minsk-belarus-august-2017-corridor-stylish-hall-modern-luxury-hotel_97694-7077.jpg?w=1060')"}}
         id="slide3" 
         className="carousel-item bg-center h-full flex items-center justify-center relative w-full">
         
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div style={{backgroundImage: "url('https://img.freepik.com/premium-psd/villa-has-swimming-pool-front-house-png-transparent-background-3d-rendering_491781-2556.jpg?w=1380')"}} 
        id="slide4" 
        className="carousel-item bg-center flex items-center justify-center h-full relative w-full">
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2024/03/27/10/34/dining-area-8658750_1280.jpg')"}} 
        id="slide4" 
        className="carousel-item bg-center h-full flex items-center justify-center relative w-full">
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
