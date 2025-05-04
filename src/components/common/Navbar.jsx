"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
        scrolling ? "p-4 backdrop-blur-md bg-[#393f14]" : "bg-transparent p-6"
      }`}
    >
      {/* Hamburger Icon */}
      <div className="lg:hidden md:hidden w-screen h-full">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-white cursor-pointer absolute z-50 bottom-3"
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
        <nav className="lg:hidden md:hidden justify-center items-center h-[100vh] w-screen bg-[#222222] fixed left-0 top-0 z-30">
          <ul className="flex flex-col gap-3 w-full h-screen justify-center items-center">
            <li>
              <button onClick={() => navigate("/")}>Home</button>
            </li>
            <li>
              <Link href={"#aboutScroll"}>About Us</Link>
            </li>
            <li>
              <Link href={"#serviceScroll"}>Services</Link>
            </li>
            <li>
              <Link href={"#productsScroll"}>Products</Link>
            </li>
            <li>
              <Link href={"#testiScroll"}>Testimonials</Link>
            </li>
            <li>
              <Link href={"/account/delete"}>User Deletion</Link>
            </li>
            <li>
              <Link href={"#privacyScroll"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"#aboutScroll"}>Contact Us</Link>
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
            <button onClick={() => navigate("/")}>Home</button>
          </li>
          <li>
            <Link href={"#aboutScroll"}>About Us</Link>
          </li>
          <li>
            <Link href={"#serviceScroll"}>Services</Link>
          </li>
          <li>
            <Link href={"#productsScroll"}>Products</Link>
          </li>
          <li>
            <Link href={"#testiScroll"}>Testimonials</Link>
          </li>
          <li>
            <Link href={"/account/delete"}>User Deletion</Link>
          </li>
          <li>
            <Link href={"#privacyScroll"}>Privacy Policy</Link>
          </li>
          <li>
            <Link href={"#aboutScroll"}>Contact Us</Link>
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
