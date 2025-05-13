import Footer from "@/components/Footer";
import Header from "@/components/Headerv2";
import Image from "next/image";
import eventOne from "@/images/h1.jpg";
import eventTwo from "@/images/h2.jpg";
import eventThree from "@/images/h3.jpg";
import eventFour from "@/images/h4.jpg";
import eventFive from "@/images/h5.jpg";

export default function allTrip() {
  return (
    <>
      <Header />
      <section className="w-full bg-[linear-gradient(to_right,_#7c4caa,_#B14D98)] lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white text-center pt-10">
          {" "}
          All Trips
        </h2>
        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-between items-center">
              <div>
                <form class=" min-w-[350px] mx-auto">
                  <label
                    for="default-search"
                    class="mb-2 text-sm font-medium text-gray-900 sr-only"
                  >
                    Search
                  </label>
                  <div class="relative">
                    <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        class="w-4 h-4 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-900 focus:border-gray-900"
                      placeholder="Search Mockups, Logos..."
                      required
                    />
                    <button
                      type="submit"
                      class="text-white absolute end-2.5 bottom-2.5 bg-[#7F5539] hover:bg-[#7F5539] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>

              <div>
                <select className="w-full border p-2 mt-1 rounded-lg bg-gray-100">
                  <option>Short By</option>
                  <option>Newest Trips</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 gap-4">
              <div className="p-2 border rounded-xl">
                <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                  <div className="p-0 relative">
                    <Image
                      className="rounded-xl w-full"
                      src={eventOne}
                      alt=""
                    />
                  </div>

                  <div className="px-3 py-2">
                    <p className="text-gray-500">5 Day's</p>
                    <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                      Colombia’s Caribbean Coast
                    </h5>
                    <p className="text-gray-900 mb-1">Ages 30-49 </p>
                    <p className="text-gray-900 mb-2">
                      From <strong>$3,245</strong>{" "}
                    </p>

                    <button
                      type="button"
                      className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2 border rounded-xl">
                <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                  <div className="p-0 relative">
                    <Image
                      className="rounded-xl w-full"
                      src={eventTwo}
                      alt=""
                    />
                  </div>

                  <div className="px-3 py-2">
                    <p className="text-gray-500">8 Day's</p>
                    <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                      Lisbon: City Break
                    </h5>
                    <p className="text-gray-900 mb-1">Ages 30-49 </p>
                    <p className="text-gray-900 mb-2">
                      From <strong>$3,245</strong>{" "}
                    </p>

                    <button
                      type="button"
                      className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2 border rounded-xl">
                <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                  <div className="p-0 relative">
                    <Image
                      className="rounded-xl w-full"
                      src={eventThree}
                      alt=""
                    />
                  </div>

                  <div className="px-3 py-2">
                    <p className="text-gray-500">5 Day's</p>
                    <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                      Tropical Puerto Rico
                    </h5>
                    <p className="text-gray-900 mb-1">Ages 30-49 </p>
                    <p className="text-gray-900 mb-2">
                      From <strong>$3,245</strong>{" "}
                    </p>

                    <button
                      type="button"
                      className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2 border rounded-xl">
                <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                  <div className="p-0 relative">
                    <Image
                      className="rounded-xl w-full"
                      src={eventFour}
                      alt=""
                    />
                  </div>

                  <div className="px-3 py-2">
                    <p className="text-gray-500">5 Day's</p>
                    <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                      Colombia’s Caribbean Coast
                    </h5>
                    <p className="text-gray-900 mb-1">Ages 30-49 </p>
                    <p className="text-gray-900 mb-2">
                      From <strong>$3,245</strong>{" "}
                    </p>

                    <button
                      type="button"
                      className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2 border rounded-xl">
                <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                  <div className="p-0 relative">
                    <Image
                      className="rounded-xl w-full"
                      src={eventFive}
                      alt=""
                    />
                  </div>

                  <div className="px-3 py-2">
                    <p className="text-gray-500">5 Day's</p>
                    <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                      Utah: Moab Adventure
                    </h5>
                    <p className="text-gray-900 mb-1">Ages 30-49 </p>
                    <p className="text-gray-900 mb-2">
                      From <strong>$3,245</strong>{" "}
                    </p>

                    <button
                      type="button"
                      className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2 border rounded-xl">
                <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                  <div className="p-0 relative">
                    <Image
                      className="rounded-xl w-full"
                      src={eventOne}
                      alt=""
                    />
                  </div>

                  <div className="px-3 py-2">
                    <p className="text-gray-500">5 Day's</p>
                    <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                      Colombia’s Caribbean Coast
                    </h5>
                    <p className="text-gray-900 mb-1">Ages 30-49 </p>
                    <p className="text-gray-900 mb-2">
                      From <strong>$3,245</strong>{" "}
                    </p>

                    <button
                      type="button"
                      className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2 border rounded-xl">
                <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                  <div className="p-0 relative">
                    <Image
                      className="rounded-xl w-full"
                      src={eventTwo}
                      alt=""
                    />
                  </div>

                  <div className="px-3 py-2">
                    <p className="text-gray-500">8 Day's</p>
                    <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                      Lisbon: City Break
                    </h5>
                    <p className="text-gray-900 mb-1">Ages 30-49 </p>
                    <p className="text-gray-900 mb-2">
                      From <strong>$3,245</strong>{" "}
                    </p>

                    <button
                      type="button"
                      className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-2 border rounded-xl">
                <div className="rounded-xl border border-neutral-200 bg-white text-neutral-950 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 border-none shadow-none">
                  <div className="p-0 relative">
                    <Image
                      className="rounded-xl w-full"
                      src={eventThree}
                      alt=""
                    />
                  </div>

                  <div className="px-3 py-2">
                    <p className="text-gray-500">5 Day's</p>
                    <h5 className="text-[18px] font-semibold tracking-tight text-gray-900 mb-1">
                      Tropical Puerto Rico
                    </h5>
                    <p className="text-gray-900 mb-1">Ages 30-49 </p>
                    <p className="text-gray-900 mb-2">
                      From <strong>$3,245</strong>{" "}
                    </p>

                    <button
                      type="button"
                      className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px]"
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
