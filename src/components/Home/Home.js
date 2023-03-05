import React from "react";
import bg from "../../images/main-bg3.png";

const Home = () => {
  return (
    <>
      <header
        className="h-[90vh] w-[100%]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="block lg:absolute top-[25%] right-[15%] text-center md:shadow-lg md:p-20  pt-40 rounded-md">
          <h1 className="text-xl lg:text-4xl font-semibold my-font">HI I AM</h1>
          <h1 className="text-4xl lg:text-6xl text-red-600 font-bold font-serif">
            Mr. Doctor
          </h1>
          <button className="bg-blue-300 text-white px-2 py-1 rounded-md mt-5">
            Explore More
          </button>
        </div>
      </header>
    </>
  );
};

export default Home;
