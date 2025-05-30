import React from "react";
import Image from "next/image";
import { FaInstagram } from 'react-icons/fa';
import Records from "../mini/Records";
import { IoStar } from "react-icons/io5";
import { IBM_Plex_Sans_Condensed } from "next/font/google";
import { FaPaperPlane } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdPlace } from "react-icons/md";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#393f14] text-white py-10 mt-10">
      <div className="mx-auto lg:max-w-[1200px] w-full flex justify-between lg:flex-row flex-col p-2 lg:p-0">
        <div className="flex flex-col gap-3 lg:w-1/4">
          <Image src={"/logo.png"} alt="" height={100} width={100} />
          <p className="font-semibold">
            Revolutionize your farm. Download Utkarsh Kisan, the all-in-one app
            for success.
          </p>
          <div className="flex justify-">
            <input
              className="rounded-3xl py-3 px-3 text-black relative w-full"
              placeholder="Your Email"
            ></input>
            <button className="relative text-black right-9 text-base">
              <FaPaperPlane />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-bold mt-3">Explore</h1>
          <div className="flex flex-col gap-3 text-base font-semibold">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Products</a>
            <a href="#">Contact Us</a>
          </div>
        </div>


        <div className="flex flex-col justify-between">
          <h1 className="text-xl font-bold mt-3">Social Updates</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <Link href='https://www.instagram.com/utkarsh_kisan?igsh=MWVxYjRhejVpeXd2dg==' target="_blank" className="hover:scale-105">
              <FaInstagram size={50} className="text-white" />
              </Link>
              <div className="flex flex-col justify-end">
                <Link href='https://www.instagram.com/utkarsh_kisan?igsh=MWVxYjRhejVpeXd2dg==' target="_blank" className="hover:scale-105">
                
                <h1 className="text-orange-400 font-semibold">Connect Us</h1>
                </Link>
                <p>Follow us on Instagram</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between">
          <h1 className="text-xl font-bold mt-3">Contact Info</h1>
          <div className="flex flex-col justify-between">
            <Records
              title={"Email"}
              description={"info.utkarshkisan@gmail.com"}
              logo={
                <div>
                  <MdOutlineMailOutline className="text-base" />
                </div>
              }
            />
            <Records
              title={"Toll-free number"}
              description={"74259 00711"}
              logo={
                <div>
                  <RiCustomerService2Fill className="text-base" />
                </div>
              }
            />
            <Records
              title={"Address"}
              description={"508, 5th Floor, Mansarovar Plaza, Jaipur, Rajasthan"}
              logo={
                <div>
                  <MdPlace className="text-base" />
                </div>
              }
            />
          </div>
        </div>
      </div>
      <hr className="lg:max-w-[1200px] mx-auto m-5 text-white opacity-35" />
      <div className="lg:max-w-[1200px] mx-auto w-full flex lg:justify-between text-white opacity-100 text-[10px] lg:flex-row flex-col items-center justify-center gap-2">
        <div className="flex gap-2">
          <Link href="#" className="hover:scale-105">
            Privacy Policy |
          </Link>
          <Link href="#" className="hover:scale-105">
            Cookie Policy |
          </Link>
          <Link href="#" className="hover:scale-105">
            Terms & Conditions
          </Link>
        </div>
        <p>Copyright © 2024 Utkarsh Kisan Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
