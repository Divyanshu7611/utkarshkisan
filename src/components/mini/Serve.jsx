import React from "react";

function Serve({ logo, title }) {
  return (
    <div>
      <div className="bg-[#b1c445] lg:w-[260px] lg:h-[260px] h-[240px] w-[240px] shadow-lg shadow-black flex flex-col justify-center items-center rounded-xl hover:scale-105 transition-all duration-200">
        <img src={logo} alt="services" height={80} width={80} />
        <h2 className="text-[#204E51] text-2xl font-semibold">{title}</h2>
      </div>
    </div>
  );
}

export default Serve;
