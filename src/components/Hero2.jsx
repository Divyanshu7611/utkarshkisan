import React from "react";

function hero2() {
  return (
    <div>
      <div className="max-w-[1200px] flex lg:flex-row flex-col mx-auto p-10 justify-between">
        <div className="w-1/2 flex flex-col justify-center gap-5">
          <h1 className="text-5xl font-bold text-[#204E51]">
            Our Passion for Agriculture Nurturing Growth and Sustaining the
            Future
          </h1>
          <p className="text-[#1E1E1E]">
            Li Europan lingues es membres del sam familie. Lor separat
            existentie es un myth. Por scientie, musica, sport etc, litot Europa
            usa li sam vocabular.
          </p>
          <div>
            <button className="bg-[#204E51] py-3 px-5 rounded-lg font-semibold hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col relative">
          <img src="/static/img2.png" className="relative" />
          <div className="absolute px-10 py-5 rounded-xl bg-white bottom-0 left-1/4 -translate-y-8">
            <h1 className="text-[#204E51] font-bold text-4xl">Since 1983</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero2;
