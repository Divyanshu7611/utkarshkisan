import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";

export default function Hero() {
  return (
    <div className="hero min-h-screen min-w-screen bg-green-800">
      <div className="max-w-[1200px] mx-auto pt-16">
        <div className="flex lg:flex-row flex-col-reverse justify-center items-center">
          <div className="lg:w-2/4 flex flex-col gap-5 p-10">
            <h1 className="lg:text-5xl text-xl font-bold">
              Sow . Connect . Harvest
            </h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              mollitia, doloribus, asperiores delectus commodi inventore
              consequuntur animi, alias doloremque sint facere? Corporis
              nesciunt deleniti maxime dolore! Eos consequuntur enim nam.
            </p>
            <div className="flex lg:gap-10 gap-5 lg:flex-row flex-col">
              <button className="lg:w-40 h-12 bg-gray-900 border-2 rounded-lg flex justify-center items-center gap-2 transition-all hover:scale-105 ">
                <IoLogoGooglePlaystore className="text-3xl" />
                <h3 className="font-semibold">PlayStore</h3>
              </button>
              <button className="lg:w-40 h-12 bg-gray-900 border-2 rounded-lg flex justify-center items-center gap-2 transition-all hover:scale-105 ">
                <SiAppstore className="text-3xl" />
                <h3 className="font-semibold">AppStore</h3>
              </button>
            </div>
          </div>
          <div className="lg:w-2/4">
            <img
              src={"/phone.png"}
              alt=""
              className="lg:h-[560px] h-[380px] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
