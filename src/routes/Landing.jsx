import React from "react";
import NavBar from "../components/NavBar";

const Landing = () => {
  return (
    <div className=" relative">
      <div className=" absolute left-1/2 -translate-x-1/2 top-0 z-10">
        <NavBar />
      </div>
      <div className="h-screen bg-slate-100 ">
        <div className="h-full relative flex flex-col justify-center items-center">
          <div className=" flex flex-col items-center opacity-80 px-12 w-full">
            <p className=" font-medium text-5xl md:text-7xl">
              Chat. Karlo. Aaao
            </p>
            <p className=" text-sm mt-5 text-center opacity-60 max-w-[500px]">
              Chat with Friends, Family and Hmmmm For that, We provide seemless
              data transfer with <i>99.999%</i> of deta Privacy
            </p>
          </div>
        </div>
        <div className=" absolute w-full bg-slate-300 flex justify-center">
          <div className=" h-40 w-40 bg-slate-400"></div>
          <div className=" h-40 w-40 bg-slate-400"></div>
          <div className=" h-40 w-40 bg-slate-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
