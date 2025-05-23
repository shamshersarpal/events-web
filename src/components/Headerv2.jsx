"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`py-2 fixed top-0 left-0 w-full z-20 transition-colors duration-300 ${
          scrolled ? "bg-white shadow-md" : ""
        }`}
      >
        <nav className="w-full z-20">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 py-1">
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image className="lg:w-[210px] w-[122px]" src={logo} alt="" />
              </a>
            </Link>
            <div className="flex space-x-3 rtl:space-x-reverse">
              <Link href="login" passHref legacyBehavior>
                <button
                  type="button"
                  className="text-gray-900 bg-white border-[#fea759] border border-white-300 focus:outline-none hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-100   rounded-lg text-sm lg:px-5 lg:py-2 px-2 py-1 flex items-center gap-1 lg:text-[16px] text-[12px] h-[45px]"
                >
                  <span className="">
                    <svg
                      className="lg:w-[18px] lg:h-[18px] w-[13px] h-[13px]"
                      viewBox="0 0 18 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 20.4063V18.3399C17 17.2438 16.5786 16.1926 15.8284 15.4175C15.0783 14.6425 14.0609 14.207 13 14.207H5C3.93913 14.207 2.92172 14.6425 2.17157 15.4175C1.42143 16.1926 1 17.2438 1 18.3399V20.4063"
                        stroke="currentcolor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 9.5938C11.2091 9.5938 13 7.74346 13 5.46096C13 3.17846 11.2091 1.32812 9 1.32812C6.79086 1.32812 5 3.17846 5 5.46096C5 7.74346 6.79086 9.5938 9 9.5938Z"
                        stroke="currentcolor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Sign In or Join
                </button>
              </Link>

              <button
                type="button"
                className="text-gray-900 justify-center  flex items-center gap-1 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 bg-[#fea759] h-[45px] w-fit"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
                onClick={toggleMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`fixed top-0 right-0 h-full bg-[#ffa858] shadow-lg transform transition-transform duration-300 ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } w-64 z-50`}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col p-4 space-y-4 ">
              <li>
                <Link href="#" passHref legacyBehavior>
                  <a className="block py-2 px-3 text-gray-800">Home</a>
                </Link>
              </li>
              <li>
                <Link href="all-trips" passHref legacyBehavior>
                  <a className="block py-2 px-3 text-gray-800">All Trips</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref legacyBehavior>
                  <a className="block py-2 px-3 text-gray-800">Profile</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref legacyBehavior>
                  <a className="block py-2 px-3 text-gray-800">Membership</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref legacyBehavior>
                  <a className="block py-2 px-3 text-gray-800">Book</a>
                </Link>
              </li>
              <li>
                <Link href="#" passHref legacyBehavior>
                  <a className="block py-2 px-3 text-gray-800">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
