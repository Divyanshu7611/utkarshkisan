import React from "react";

function About() {
  return (
    <div className="bg-slate-300" id="about">
      <div className="max-w-[1200px] mx-auto flex pt-10 lg:flex-row flex-col-reverse">
        <div className="flex flex-col gap-3 text-blue-950 p-7 lg:w-2/4 justify-center">
          <h1 className="text-4xl font-bold mb-5">About US</h1>
          <p className="text-justify">
            We believe on our tag line that is sow . Connect. Harvest Sow :-Sow:
            Knowledge at Your Fingertips Utkarsht Kisan empowers you to
            &ldquo;Sow&ldquo; the seeds of success. The app provides access to a
            wealth of localized and up-to-date information on various crops,
            including Connect:-Building a Network for Success Utkarsht Kisan
            goes beyond just information. It fosters a sense of
            &ldquo;Connection&ldquo; within the agricultural community.
            Harvest:-get fruit of your hardwork
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure,
            ut dolores accusantium assumenda blanditiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum iure,
            ut dolores accusantium assumenda blanditiis.
          </p> */}
        </div>
        <div className="lg:w-2/4">
          <img alt="" src={"/about.png"} className="h-[25rem] mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default About;
