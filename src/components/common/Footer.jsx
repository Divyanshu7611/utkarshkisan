import React from "react";
import Image from "next/image";
import Records from "../mini/Records";
import { IoStar } from "react-icons/io5";
import { IBM_Plex_Sans_Condensed } from "next/font/google";

function Footer() {
  return (
    <div className="bg-[#393f14] text-white py-10 mt-10">
      <div className="mx-auto lg:max-w-[1200px] w-full flex justify-between lg:flex-row flex-col p-2 lg:p-0">
        <div className="flex flex-col gap-3 lg:w-1/4">
          <Image src={"/logo.png"} alt="" height={100} width={100} />
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quam
            placeat reiciendis quo, consectetur voluptatum!
          </p>
          <input
            className="rounded-3xl py-3 px-3"
            placeholder="Your Email"
          ></input>
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
          <h1 className="text-xl font-bold mt-3">Recent Updates</h1>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <Image src="/static/rice.png" width={80} height={80} />
              <div className="flex flex-col justify-end">
                <h1 className="text-orange-200 font-semibold">12 SEP</h1>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
            {/* 2 newe */}
            <div className="flex gap-2">
              <Image src="/static/rice.png" width={80} height={80} />
              <div className="flex flex-col justify-end">
                <h1 className="text-orange-200 font-semibold">12 SEP</h1>
                <p>Lorem ipsum dolor sit.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between">
          <h1 className="text-xl font-bold mt-3">Contact Info</h1>
          <div className="flex flex-col justify-between">
            <Records
              title={"15+"}
              description={"Years Of Experience"}
              logo={
                <div>
                  <IoStar className="text-xl" />
                </div>
              }
            />
            <Records
              title={"15+"}
              description={"Years Of Experience"}
              logo={
                <div>
                  <IoStar className="text-xl" />
                </div>
              }
            />
            <Records
              title={"15+"}
              description={"Years Of Experience"}
              logo={
                <div>
                  <IoStar className="text-xl" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
