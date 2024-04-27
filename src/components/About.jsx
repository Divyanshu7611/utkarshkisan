import React from "react";
import Product from "./mini/Product";

function About() {
  return (
    <div className="mt-32 mb-32" id="about">
      <div className="max-w-[1200px] mx-auto flex-col flex">
        <h1 className="text-[#768233] text-5xl font-bold text-center">
          Our Featured Product
        </h1>
        <p className="text-[#1E1E1E] font-medium text-center mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore group
          adipisicing elit , quaerat.
        </p>
        <div className="flex justify-between mt-16 lg:flex-row flex-col lg:gap-0 gap-5 p-5">
          <Product
            title={"Rice"}
            image={"/static/rice.png"}
            description={
              "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. "
            }
          />
          <Product
            title={"Rice"}
            image={"/static/rice.png"}
            description={
              "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. "
            }
          />
          <Product
            title={"Rice"}
            image={"/static/rice.png"}
            description={
              "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. "
            }
          />
          <Product
            title={"Rice"}
            image={"/static/rice.png"}
            description={
              "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. "
            }
          />
        </div>
        <a
          className="text-[#204E51] text-xl font-bold hover:underline text-center mt-12"
          href="#"
        >
          See all Products
        </a>
      </div>
    </div>
  );
}

export default About;
