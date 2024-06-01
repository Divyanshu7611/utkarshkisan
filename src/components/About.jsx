import React from "react";
import Product from "./mini/Product";

function About() {
  return (
    <div className="mt-32 mb-32" id="productsScroll">
      <div className="max-w-[1200px] mx-auto flex-col flex">
        <h1 className="text-[#768233] text-5xl font-bold text-center">
          Our Featured Product
        </h1>
        <p className="text-[#1E1E1E] font-medium text-center mt-5">
          Revolutionize your farm. Download Utkarsh Kisan, the all-in-one app
          for success.
        </p>
        <div className="flex justify-between mt-16 lg:flex-row flex-col lg:gap-0 gap-5 p-5">
          <Product
            title={"Pulses"}
            image={"/products/grams.jpg"}
            description={
              "Pulses such as pigeon pea, Moong Dal , Urad Dal , Masoor Dal , Chana Dal , Tuvar Dal ,Kulthi Dal."
            }
          />
          <Product
            title={"Food Grains"}
            image={"/products/foodgrains.jpg"}
            description={
              "Food Grains Such as Rice ,Wheat, Maize, Millets, Barley , Oats"
            }
          />
          <Product
            title={"Oil Seeds"}
            image={"/products/seeds.jpg"}
            description={
              "Oil Seeds Such as Mustard, Groundnut, Sesame, Soyabean, Sunflower, Castor , Coconut"
            }
          />
          <Product
            title={"Spices"}
            image={"/products/spices.jpg"}
            description={
              "Spices such as Turmeric ,Chilli ,Coriander, Cumin , Fenugreek , Black Pepper , Cardamom, Cloves , Nutmeg"
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
