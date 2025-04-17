"use client";
import Link from "next/link";
import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import google from "@/images/google.svg";

export default function SignUp() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50 login-page relative">
          <div className="absolute inset-0 bg-black opacity-60 "></div>
          <div className="relative z-10 flex flex-col items-center justify-center px-6  lg:py-0">
            <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign Up
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-100 focus:border-primary-600 block w-full p-2.5"
                      placeholder="enter your email"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required=""
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required=""
                    />
                  </div>

                  <div className="">
                    <Link href="/register-user" passHref legacyBehavior>
                      <button
                        type="submit"
                        className="text-white justify-center   w-full flex items-center   bg-[#7F5539]  font-medium rounded-lg text-sm px-5 py-3.5 text-center mb-3"
                      >
                        Sign Up
                      </button>
                    </Link>
                    <Link href="/register-user" passHref legacyBehavior>
                      <button
                        type="submit"
                        className=" justify-center   w-full flex items-center bg-[#ffffff]  font-medium rounded-lg text-sm px-5 py-3.5 text-center mb-2 border border-black gap-2"
                      >
                        <span>
                          {" "}
                          <Image src={google} width={18} alt="google" />{" "}
                        </span>{" "}
                        Continue with Google
                      </button>
                    </Link>
                  </div>
                  <p className="text-sm font-light text-gray-500">
                    You have an account?{" "}
                    <Link href="/login" passHref legacyBehavior>
                      <a className="font-medium text-primary-600 hover:underline">
                        Sign in
                      </a>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
