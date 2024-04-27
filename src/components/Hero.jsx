// import React from "react";
// import { IoLogoGooglePlaystore } from "react-icons/io5";
// import { SiAppstore } from "react-icons/si";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div>
//       <div className="hero min-h-screen min-w-screen flex overflow-hidden">
//         <div className="flex flex-col lg:justify-start items-center lg:items-start lg:max-w-[70rem] my-auto lg:ml-10 m-3 w-fit">
//           <h1 className="lg:text-7xl text-2xl font-bold text-[#b1c445] heading font-serif">
//             Sow. Connect. Harvest.
//           </h1>
//           <h1 className="lg:text-2xl text-md font-bold text-center mt-5">
//             Utkarsh Kisan Revolutionizing Agriculture with techhnology
//           </h1>
//           <p></p>

//           <p className="mt-5">Download Utkarsh Kisan App</p>
//           <div className="flex lg:flex-row flex-col gap-7 mt-5 w-full lg:w-fit">
//             <button className="bg-[#b1c445] py-3 px-5 rounded-lg font-semibold hover:scale-105">
//               Download Now
//             </button>
//             <button className="py-3 px-5 rounded-lg font-semibold border hover:scale-105">
//               Read More
//             </button>
//           </div>
//         </div>
//         <div className="absolute right-0 bottom-0 animation overflow-hidden">
//           <Image
//             alt=""
//             src={"/static/phone.png"}
//             className="lg:h-[500px] lg:w-[500px] h-[10rem] w-[10rem]"
//             height={400}
//             width={400}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { IoLogoGooglePlaystore } from "react-icons/io5";
// import { SiAppstore } from "react-icons/si";
// import Image from "next/image";

// export default function Hero() {
//   return (
//     <div className="hero min-h-screen min-w-screen flex overflow-hidden relative">
//       <div className="flex flex-col lg:justify-start items-center lg:items-start lg:max-w-[70rem] my-auto lg:ml-10 m-3 w-fit z-10">
//         <h1 className="lg:text-7xl text-2xl font-bold text-[#b1c445] heading font-serif animate-fadeInUp">
//           Sow. Connect. Harvest.
//         </h1>
//         <h1 className="lg:text-2xl text-md font-bold text-center mt-5 animate-fadeInUp animate-delay-200">
//           Utkarsh Kisan Revolutionizing Agriculture with techhnology
//         </h1>
//         <p className="mt-5 animate-fadeInUp animate-delay-400">
//           Download Utkarsh Kisan App
//         </p>
//         <div className="flex lg:flex-row flex-col gap-7 mt-5 w-full lg:w-fit animate-fadeInUp animate-delay-600">
//           <button className="bg-[#b1c445] py-3 px-5 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
//             Download Now
//           </button>
//           <button className="py-3 px-5 rounded-lg font-semibold border hover:scale-105 transition-transform duration-300">
//             Read More
//           </button>
//         </div>
//       </div>
//       <div className="absolute right-0 bottom-0 overflow-hidden animate-slideInRight animate-delay-800">
//         <Image
//           alt=""
//           src={"/static/phone.png"}
//           className="lg:h-[500px] lg:w-[500px] h-[10rem] w-[10rem]"
//           height={500}
//           width={500}
//         />
//       </div>
//     </div>
//   );
// }


import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="hero min-h-screen min-w-screen flex overflow-hidden relative">
      <div className="flex flex-col lg:justify-start items-center lg:items-start lg:max-w-[70rem] my-auto lg:ml-10 m-3 w-fit z-10">
        <div className="bg-[#b1c445] rounded-full p-2 animate-bounce animate-delay-1000">
          <h3 className="text-white text-center text-sm font-bold">New</h3>
        </div>
        <h1 className="lg:text-7xl text-2xl font-bold text-[#b1c445] heading font-serif animate-fadeInUp">
          Sow. Connect. Harvest.
        </h1>
        <h1 className="lg:text-2xl text-md font-bold text-center mt-5 animate-fadeInUp animate-delay-200">
          Utkarsh Kisan Revolutionizing Agriculture with techhnology
        </h1>
        <p className="mt-5 animate-fadeInUp animate-delay-400">
          Download Utkarsh Kisan App
        </p>
        <div className="flex lg:flex-row flex-col gap-7 mt-5 w-full lg:w-fit animate-fadeInUp animate-delay-600">
          <button className="bg-[#b1c445] py-3 px-5 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            <IoLogoGooglePlaystore className="text-2xl text-white" />
            <span>Google Play</span>
          </button>
          <button className="py-3 px-5 rounded-lg font-semibold border hover:scale-105 transition-transform duration-300 flex items-center gap-2">
            <SiAppstore className="text-2xl" />
            <span>App Store</span>
          </button>
        </div>
        <div className="mt-10 animate-fadeInUp animate-delay-800">
          <p className="text-gray-500">Already have an account?</p>
          <button className="text-[#b1c445] font-semibold hover:underline">
            Sign In
          </button>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 overflow-hidden animate-slideInRight animate-delay-1000">
        <Image
          alt=""
          src={"/static/phone.png"}
          className="lg:h-[500px] lg:w-[500px] h-[10rem] w-[10rem]"
          height={500}
          width={500}
        />
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-[#b1c445] to-transparent opacity-10 animate-fadeIn animate-delay-1200"></div>
    </div>
  );
}