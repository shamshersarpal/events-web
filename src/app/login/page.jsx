import Footer from "@/components/Footer";
import Header from "@/components/Headerv2";
import Link from "next/link";
import Image from "next/image";
import google from "@/images/google.svg";

export default function LoginClient() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gray-50 login-page relative">
          <div className="overlyhero "></div>
          <div className="relative z-10 flex flex-col h-full items-center justify-center px-6 py-8  md:h-screen lg:py-0">
            <div className="w-full bg-white/80 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Login
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500">
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="text-dark justify-center   w-full flex items-center   bg-[#ffa858]  font-medium rounded-lg text-sm px-5 py-3.5 text-center mb-3"
                    >
                      Sign in
                    </button>

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
                  </div>

                  <p className="text-sm font-light text-gray-500">
                    Don’t have an account yet?{" "}
                    <Link href="/signup" passHref legacyBehavior>
                      <a className="font-medium text-primary-600 hover:underline">
                        Sign up
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
