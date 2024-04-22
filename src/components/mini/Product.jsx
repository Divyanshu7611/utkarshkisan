import React from "react";

function Product({ image, title, description }) {
  return (
    <div>
      <div className="bg-[#b1c445] lg:w-[275px] lg:h-[370px] w-full h-full flex flex-col justify-center items-center gap-5 p-5 rounded-xl hover:scale-105 transition-all duration-200 shadow-xl shadow-black">
        <img
          src={image}
          alt="Something Went Wrong"
          loading="lazy"
          width={190}
          height={190}
          className="rounded-xl"
        />
        <h1 className="text-[#204E51] text-xl font-semibold">{title}</h1>
        <p className=" text-[#1E1E1E] text-xs text-center">{description}</p>
      </div>
    </div>
  );
}

export default Product;
