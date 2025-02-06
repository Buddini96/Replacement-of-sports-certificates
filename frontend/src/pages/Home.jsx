//import React from 'react'
import HomeBg from "../assets/images/homeBg.png"

function Home() {
  return (
    <div className="m-7 relative">
      <img src={HomeBg} alt="Home Background" className="w-full object-cover" />

      <div className="absolute bottom-[7rem] px-5 sm:px-10 text-white">
        <h1 className="text-3xl font-bold">
          {" "}
          Replace Your Sports Certificate Easily
        </h1>
        <p className="text-medium max-w-md mt-2">
          A secure and efficient platform for replacing lost or damaged sports
          certificates
        </p>
        <div className="mt-6 font-normal flex flex-col sm:flex-row sm:space-x-4">
          <button className="bg-[#84D0FF] px-6 py-2 text-black  rounded-[10px] mb-4 sm:mb-0">
            Request Now
          </button>
          <button className="bg-[#84D0FF] px-6 py-2 text-black  rounded-[10px]">
            Track Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home
