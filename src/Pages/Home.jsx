import { useLoaderData } from "react-router-dom";
import AllData from "../components/AllData";
import Banner from "../components/Banner";
import BannerComponents from "../components/BannerComponents";
import dynamicTitleChange from "../Hooks/DynamicTitleChange";

const Home = () => {
  const allData = useLoaderData();

  dynamicTitleChange("DreamToView");

  return (
    <div className="font-poppins">
      <Banner></Banner>
      <div>
        <BannerComponents></BannerComponents>
      </div>
      <div className="grid px-5 grid-cols-1 lg:grid-cols-3 gap-5">
        {allData.map((data) => (
          <AllData key={data.id} data={data}></AllData>
        ))}
      </div>
    </div>
  );
};

export default Home;
