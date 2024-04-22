import React from "react";
import Serve from "./mini/Serve";

function Services() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto flex flex-col">
        <h1 className="text-center text-[#768233] text-5xl font-bold">
          Our Services
        </h1>
        <p className="text-[#1E1E1E] text-md text-center mt-5">
          Li Europan lingues es membres del sam familie. Lor separat existentie
          es un myth Por scientie, musica.
        </p>
        <div className="flex justify-between mt-10 lg:flex-row flex-col p-5 items-center gap-5">
          <div>
            <Serve title={"lorem"} logo={"/static/icon1.png"} />
          </div>
          <div>
            <Serve title={"lorem"} logo={"/static/icon1.png"} />
          </div>
          <div>
            <Serve title={"lorem"} logo={"/static/icon1.png"} />
          </div>
          <div>
            <Serve title={"lorem"} logo={"/static/icon1.png"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
