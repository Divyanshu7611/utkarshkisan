import React from "react";

function Navbar() {
  return (
    <div className="fixed z-20 w-full">
      <div className="justify-between flex bg-black opacity-80 pl-10 pr-10 items-center py-1">
        <img src={"/logo.png"} alt="" className="h-[65px]" />
        <div className="flex gap-5">
          <a
            href={"#"}
            className="hover:text-semibold text-slate-200 hover:text-white hover:underline"
          >
            Home
          </a>
          <a
            href={"#"}
            className="hover:text-semibold text-slate-200 hover:text-white hover:underline"
          >
            About Us
          </a>
          <a
            href={"#"}
            className="hover:text-semibold text-slate-200 hover:text-white hover:underline"
          >
            Blog
          </a>
          <a
            href={"#"}
            className="hover:text-semibold text-slate-200 hover:text-white hover:underline"
          >
            Contact
          </a>
          <a
            className="border-2 px-2 text-white hover:text-black hover:font-semibold hover:bg-white"
            href={"#"}
          >
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
