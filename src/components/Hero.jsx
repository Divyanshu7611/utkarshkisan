import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";

export default function Hero() {
  return (
    <div>
      <div className="hero min-h-screen min-w-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center max-w-[70rem]">
          <img src="/logo.png" alt="" className="h-[100px]" />
          <h1 className="text-center lg:text-7xl text-2xl font-bold">
            Utkarsh Kisan Revolutionizing
          </h1>
          <h1 className="text-center lg:text-5xl text-xl font-bold">
            Agriculture with techhnology
          </h1>
          <p className="max-w-lg text-center mt-3">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </p>
          <p className="mt-10">Download Utkarsh Kisan App</p>
          <div className="flex lg:flex-row flex-col gap-7 mt-5">
            <button className="bg-[#b1c445] py-3 px-5 rounded-lg font-semibold hover:scale-105">
              Download Now
            </button>
            <button className="py-3 px-5 rounded-lg font-semibold border hover:scale-105">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
