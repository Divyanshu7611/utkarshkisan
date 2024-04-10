import React from "react";

function About() {
  return (
    <div className="bg-slate-300">
      <div className="max-w-[1200px] mx-auto flex pt-10 lg:flex-row flex-col-reverse">
        <div className="flex flex-col gap-3 text-blue-950 p-7 lg:w-2/4 justify-center">
          <h1 className="text-4xl font-bold mb-5">About US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure,
            ut dolores accusantium assumenda blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure,
            ut dolores accusantium assumenda blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure,
            ut dolores accusantium assumenda blanditiis.
          </p>
        </div>
        <div className="lg:w-2/4">
          <img alt="" src={"/about.png"} className="h-[25rem] mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
