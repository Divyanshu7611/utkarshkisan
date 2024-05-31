import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Records from "./mini/Records";
import { IoStar } from "react-icons/io5";
import { FaBox } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";

function Section() {
  return (
    <div className="flex p-5">
      <div className="lg:w-[1200px] flex lg:flex-row flex-col mx-auto justify-between gap-20">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-[#768233] font-bold lg:text-5xl">
            The Benefits of Choosing Our Expertise
          </h1>
          <p className="text-[#1E1E1E] font-normal mt-5">
            From knowledge to harvest, we empower you. Choose Utkarsh Kisan,
            your trusted guide in agritech.
          </p>

          <button className="bg-[#204E51] px-10 py-3 rounded-lg hover:scale-105 flex justify-center items-baseline gap-3 mt-10 lg:w-fit w-full font-semibold">
            Learn More
            <FaLongArrowAltRight className="translate-y-0.5" />
          </button>
        </div>
        <div className="lg:w-1/2 bg-[#b1c445] rounded-xl flex flex-col justify-center items-center gap-5 py-5">
          <div className="flex flex-col justify-between gap-5">
            <div>
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
            {/* 2 */}
            <div>
              <Records
                title={"40+"}
                description={"Product"}
                logo={
                  <div>
                    <FaBox className="text-xl" />
                  </div>
                }
              />
            </div>
            {/* 3 */}
            <div>
              <Records
                title={"2,458+"}
                description={"Satisfied Clients"}
                logo={
                  <div>
                    <FaCheck className="text-xl" />
                  </div>
                }
              />
            </div>
            {/* 4 */}
            <div>
              <Records
                title={"20"}
                description={"Local Team Members"}
                logo={
                  <div>
                    <HiUserGroup className="text-xl" />
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
