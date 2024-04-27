import React from "react";

function Records({ logo, title, description }) {
  return (
    <div className="flex justify-center items-center gap-10 w-fit">
      <div className="bg-[#194043] rounded-full p-5">
        {/* <img src={logo} alt="" /> */}
        {logo}
      </div>
      <div>
        <h1 className="text-white font-bold text-2xl">{title}</h1>
        <p className="font-normal text-xs text-white">{description}</p>
      </div>
    </div>
  );
}

export default Records;
