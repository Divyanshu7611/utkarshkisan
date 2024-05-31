import React from "react";
import Image from "next/image";
import autoprefixer from "autoprefixer";

function hero2() {
  return (
    <div id="aboutScroll">
      <div className="max-w-[1200px] flex lg:flex-row flex-col mx-auto lg:p-10 justify-between">
        <div className="lg:w-1/2 flex flex-col justify-center gap-5 p-8 lg:p-0">
          <h1 className="lg:text-5xl text-2xl font-bold text-[#6f7a2d]">
            Our Passion for Agriculture Nurturing Growth and Sustaining the
            Future
          </h1>
          <p className="text-[#1E1E1E]">
            From knowledge to harvest, we empower you. Choose Utkarsh Kisan,
            your trusted guide in agritech.
          </p>
          <div>
            <button className="bg-[#204E51] py-3 px-5 rounded-lg font-semibold hover:scale-105 w-full lg:w-fit">
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:w-1/2  flex flex-col relative w-full mx-auto">
          <img src="/static/img2.png" className="relative mx-auto" />
          <div className="absolute px-10 py-5 rounded-xl opacity-0 lg:opacity-100 bg-[#b1c445] bottom-0 lg:left-1/4 lg:-translate-y-8">
            <h1 className="text-[#204E51] font-bold text-4xl">Since 2024</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero2;
