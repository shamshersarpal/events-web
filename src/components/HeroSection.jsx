"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const images = ["url(/hero.jpg)", "url(/hero1.jpg)", "url(/hero2.jpg)"];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out bg-cover bg-center hero"
          style={{ backgroundImage: images[currentImage] }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative top-[100px] z-20 lg:mb-0 mb-[-80px]">
            <SearchBar />
          </div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className=" text-[40px] font-extrabold text-center text-white md:text-5xl lg:text-[60px] leading-7">
              Arrive solo,
            </h1>
            <h1 className="mb-2 text-[40px] font-extrabold text-center text-white md:text-5xl lg:text-[60px]">
              leave as friends
            </h1>
            <div className="w-full max-w-[800px] mx-auto lg:px-0 px-4">
              <p className="text-center text-white lg:text-[22px]">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups.
              </p>
            </div>
            <div className="searchBar mt-2 w-full">
              <div className="flex flex-wrap gap-1 my-5 px-4 justify-center">
                <button
                  type="button"
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-[18px] px-8 py-3.5 me-2 mb-2"
                >
                  Browse Trip
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
