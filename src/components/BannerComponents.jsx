const BannerComponents = () => {

  const handlerChanged = (index) => {
    console.log(index);
  }
  
  return (
    <div className="hero md:h-[500px] bg-base-200">
      <div className="hero-content flex-col sm:flex-col-reverse lg:flex-row-reverse ">
        <div  className="w-full hidden lg:block ">
          <div onChange={handlerChanged} className="carousel h-[300px] rounded-lg w-full">
            <div
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGd1ZXN0JTIwaG91c2V8ZW58MHx8MHx8fDA%3D')",
              }}
              id="item1"
              className="carousel-item bg-center flex items-center justify-center bg-no-repeat rounded-lg h-full w-full"
            >
            </div>
            <div
              
              id="item2"
              className="carousel-item bg-center rounded-lg h-full w-full"
            >
              <img className="w-full h-full" src="https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div id="item3" className="carousel-item w-full">
              <img
                src="https://images.unsplash.com/photo-1563911302283-d2bc129e7570?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full"
              />
            </div>
            <div id="item4" className="carousel-item w-full">
              <img
                src="https://images.unsplash.com/photo-1618140052121-39fc6db33972?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            Welcome to witness your dream unfolding with us!
          </h1>
          <p className="py-6 text-[18px] font-raleway ">
            Welcome to{" "}
            <span className="text-2xl font-poppins font-semibold text-blue-950">
              Dream To View
            </span>
            , where dreams become addresses. Our dedicated team is here to turn
            your vision into reality, from finding the perfect space to closing
            the deal. Join us on the journey of making your dream home a
            reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerComponents;

