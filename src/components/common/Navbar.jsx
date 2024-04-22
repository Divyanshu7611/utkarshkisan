"use client";
// import React, { useState, useCallback, useEffect } from "react";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { IoArrowBackOutline } from "react-icons/io5";
// import { MdOutlineArrowBackIos } from "react-icons/md";
// // import tharlogo from "../assets/thar-logo.png";

// const Navbar = () => {
//   const router = useRouter();
//   const [isOpen, setIsOpen] = useState(false);
//   const [Scrolling, setIsScrolled] = useState(false);

//   const navigate = useCallback(
//     (name) => {
//       router.push(name);
//       setIsOpen(false);
//     },
//     [router]
//   );
//   useEffect(() => {
//     const HandleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", HandleScroll);
//     return () => {
//       window.removeEventListener("scroll", HandleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`navbar fixed top-0 left-0 z-30 bg-opacity-80 hover:bg-opacity-90 transition-all duration-500 ${
//         Scrolling ? "bg-[#393f14] p-4 backdrop-blur-md" : "bg-transparent p-6"
//       }`}
//     >
//       <div className="flex justify-between items-center absolute">
//         <div className="lg:hidden md:hidden z-30">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <svg
//               className="w-6 h-6 text-white cursor-pointer"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Collapsible menu for mobile */}
//       {isOpen && (
//         <nav className="lg:hidden md:hidden justify-center items-center h-screen w-screen bg-[#222222] top-0 left-0 fixed">
//           <ul className="flex flex-col gap-3">
//             <li>
//               <button onClick={() => navigate("/mun")}>Home</button>
//             </li>
//             <li>
//               <button onClick={() => navigate("/mun#committe")}>
//                 About Us
//               </button>
//             </li>

//             <li>
//               <button onClick={() => navigate("/mun/#foot")}>Services</button>
//             </li>

//             <li>
//               <button onClick={() => navigate("/")}>Go Back</button>
//             </li>
//           </ul>
//         </nav>
//       )}

//       {/* for larger screens */}
//       <nav className="justify-between flex w-screen">
//         <Image alt="" src={"/logo.png"} height={60} width={60} className="" />
//         <ul className="flex gap-5 justify-between items-center mx-auto text-base">
//           <li>
//             <button onClick={() => navigate("/mun")}>Home</button>
//           </li>
//           <li>
//             <button onClick={() => navigate("/mun/#committe")}>About</button>
//           </li>

//           <li>
//             <button onClick={() => navigate("/mun/#foot")}>Services</button>
//           </li>
//           <li>
//             <button onClick={() => navigate("/mun/#foot")}>Contact</button>
//           </li>
//         </ul>
//         <div className="-translate-x-20">
//           <button className="border bg-[#204e51b2] py-3 px-5 rounded-lg font-semibold hover:scale-105">
//             Download Now
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const navigate = useCallback(
    (name) => {
      router.push(name);
      setIsOpen(false);
    },
    [router]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 z-30 bg-opacity-80 hover:bg-opacity-90 transition-all duration-500 ${
        scrolling ? "bg-[#393f14] p-4 backdrop-blur-md" : "bg-transparent p-6"
      }`}
    >
      {/* Hamburger Icon */}
      <div className="lg:hidden md:hidden z-30">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-white cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Collapsible menu for mobile */}
      {isOpen && (
        <nav className="lg:hidden md:hidden justify-center items-center h-screen w-screen bg-[#222222] top-0 left-0 fixed">
          <ul className="flex flex-col gap-3 mx-auto w-full">
            <li>
              <button onClick={() => navigate("/mun")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/mun#committe")}>
                About Us
              </button>
            </li>
            <li>
              <button onClick={() => navigate("/mun/#foot")}>Services</button>
            </li>
            <li>
              <button onClick={() => navigate("/")}>Go Back</button>
            </li>
          </ul>
        </nav>
      )}

      {/* Logo and other items for larger screens */}
      <nav className="hidden lg:flex md:flex justify-between w-screen">
        <div>
          <Image alt="" src={"/logo.png"} height={60} width={60} />
        </div>
        <ul className="flex gap-5 justify-between items-center mx-auto text-base">
          <li>
            <button onClick={() => navigate("/mun")}>Home</button>
          </li>
          <li>
            <button onClick={() => navigate("/mun#committe")}>About</button>
          </li>
          <li>
            <button onClick={() => navigate("/mun/#foot")}>Services</button>
          </li>
          <li>
            <button onClick={() => navigate("/mun/#foot")}>Contact</button>
          </li>
        </ul>
        <div className="-translate-x-20">
          <button className="border bg-[#204e51b2] py-3 px-5 rounded-lg font-semibold hover:scale-105">
            Download Now
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
