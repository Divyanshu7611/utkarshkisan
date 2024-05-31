"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Testimonials from "../Testimonials";

export default function swiper() {
  return (
    <>
      <h1 className="text-center text-5xl font-bold text-[#768233] mt-20">
        Testimonials
      </h1>
      <p className="text-[#1E1E1E] text-center mb-20 font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ducimus
      </p>
      {/* fpr mobile screen */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        loop={true}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 1, // Adjust this value for mobile screens
          },
          1024: {
            slidesPerView: 2, // Adjust this value for larger screens
          },
          1200: {
            slidesPerView: 3, // Adjust this value for even larger screens
          },
        }}
        className="mySwiper lg:max-w-[1200px]  mobileSwip "
      >
        <SwiperSlide className="rounded-xl h-fit">
          <Testimonials
            description={
              "Utkarsh Kisan is my one-stop shop for all things farming. The app keeps me updated on market prices and connects me directly with consumers."
            }
            city={"Bihar(Farmer)"}
            name={"Amit Kumar"}
          />
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide className="rounded-xl h-fit">
          <Testimonials
            description={
              "Utkarsh Kisan expert guidance and online community helped me clarify my career path in agriculture. I feel confident and prepared for my future."
            }
            city={"Rajasthan(Student)"}
            name={"Riya Sharma"}
          />
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide className="rounded-xl h-fit">
          <Testimonials
            description={
              "Since using Utkarsh Kisan, I have become more efficient in managing my farm resources. The app is easy-to-use interface."
            }
            name={"Sanjay Mishra"}
            city={"Uttar Pradesh (Farmer)"}
          />
        </SwiperSlide>
        {/* 4 */}
        <SwiperSlide className="rounded-xl h-fit">
          <Testimonials
            description={
              "Utkarsh Kisan has been a game-changer for my farm. I have learned new techniques, gotten better prices for my crops, and increased my yield by 20%"
            }
            name={"Rajesh Patel"}
            city={"Maharashtra (Farmer)"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
