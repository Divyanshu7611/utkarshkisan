import React from "react";
import Serve from "./mini/Serve";

function Services() {
  return (
    <div className="bg-gradient-to-br from-[#f0f5e6] to-white py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <h1 className="text-center text-[#768233] text-5xl font-bold animate-fadeInUp">
          Our Services
        </h1>
        <p className="text-[#1E1E1E] text-md text-center mt-5 max-w-[800px] mx-auto animate-fadeInUp animate-delay-200">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth Por scientie, musica.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 p-5 animate-fadeInUp animate-delay-400 mx-auto">
          <div className="service-card">
            <Serve title={"lorem"} logo={"/static/icon1.png"} />
          </div>
          <div className="service-card">
            <Serve title={"lorem"} logo={"/static/icon1.png"} />
          </div>
          <div className="service-card">
            <Serve title={"lorem"} logo={"/static/icon1.png"} />
          </div>
          <div className="service-card">
            <Serve title={"lorem"} logo={"/static/icon1.png"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;