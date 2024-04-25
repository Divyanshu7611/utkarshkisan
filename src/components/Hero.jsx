import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="hero min-h-screen min-w-screen flex overflow-hidden">
        <div className="flex flex-col lg:justify-start items-center lg:items-start lg:max-w-[70rem] my-auto lg:ml-10 m-3 w-fit">
          <h1 className="lg:text-7xl text-2xl font-bold text-[#b1c445] heading font-serif">
            Sow. Connect. Harvest.
          </h1>
          <h1 className="lg:text-2xl text-md font-bold text-center mt-5">
            Utkarsh Kisan Revolutionizing Agriculture with techhnology
          </h1>
          <p></p>

          <p className="mt-5">Download Utkarsh Kisan App</p>
          <div className="flex lg:flex-row flex-col gap-7 mt-5 w-full lg:w-fit">
            <button className="bg-[#b1c445] py-3 px-5 rounded-lg font-semibold hover:scale-105">
              Download Now
            </button>
            <button className="py-3 px-5 rounded-lg font-semibold border hover:scale-105">
              Read More
            </button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 animation overflow-hidden">
          <Image
            alt=""
            src={"/static/phone.png"}
            className="lg:h-[500px] lg:w-[500px] h-[10rem] w-[10rem]"
            height={400}
            width={400}
          />
        </div>
      </div>
    </div>
  );
}
