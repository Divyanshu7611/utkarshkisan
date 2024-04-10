"use client";
// import React from "react";

// function Navbar() {
//   return (
//     <div classNameName="fixed z-20 w-full">
//       <div classNameName="justify-between flex bg-black opacity-80 pl-10 pr-10 items-center py-1">
//         <img src={"/logo.png"} alt="" classNameName="h-[65px]" />
//         <div classNameName="flex gap-5">
//           <a
//             href={"#"}
//             classNameName="hover:text-semibold text-slate-200 hover:text-white hover:underline"
//           >
//             Home
//           </a>
//           <a
//             href={"#"}
//             classNameName="hover:text-semibold text-slate-200 hover:text-white hover:underline"
//           >
//             About Us
//           </a>
//           <a
//             href={"#"}
//             classNameName="hover:text-semibold text-slate-200 hover:text-white hover:underline"
//           >
//             Blog
//           </a>
//           <a
//             href={"#"}
//             classNameName="hover:text-semibold text-slate-200 hover:text-white hover:underline"
//           >
//             Contact
//           </a>
//           <a
//             classNameName="border-2 px-2 text-white hover:text-black hover:font-semibold hover:bg-white"
//             href={"#"}
//           >
//             Call Now
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const navToggler = document.querySelector(".nav-toggler");
    const navMenu = document.querySelector(".site-navbar ul");
    const navLinks = document.querySelectorAll(".site-navbar a");

    const allEventListners = () => {
      // Toggler icon click event
      navToggler.addEventListener("click", togglerClick);
      // Nav links click event
      navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
    };

    const togglerClick = () => {
      navToggler.classList.toggle("toggler-open");
      navMenu.classList.toggle("open");
    };

    const navLinkClick = () => {
      if (navMenu.classList.contains("open")) {
        navToggler.click();
      }
    };

    // Load event listeners when component mounts
    allEventListners();

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      navToggler.removeEventListener("click", togglerClick);
      navLinks.forEach((elem) =>
        elem.removeEventListener("click", navLinkClick)
      );
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="fixed w-full">
      <header className="header-area">
        <div className="navbar-area">
          <div className="container">
            <nav className="site-navbar">
              <a href="#home" className="site-logo">
                <img src="/logo.png" alt="" className="h-[50px]" />
              </a>

              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li className="">
                  <a href="tel:18004199943" className="text-black">
                    Call now
                  </a>
                </li>
              </ul>

              <button className="nav-toggler">
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
