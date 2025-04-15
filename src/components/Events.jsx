import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import eventOne from "@/images/h1.jpg";
import eventTwo from "@/images/h2.jpg";
import eventThree from "@/images/h3.jpg";
import eventFour from "@/images/h4.jpg";
import eventFive from "@/images/h5.jpg";

export default function Events() {
  return (
    <>
      <section className="lg:py-20 py-10">
        <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
          <Carousel
            className="max-w-screen-xl mx-auto"
            opts={{ align: "start" }}
          >
            <div className="pb-10">
              <h2 className="lg:text-4xl text-2xl font-bold text-center">
                Trips for First-Timers
              </h2>
              <div className="max-w-[450px] mx-auto w-full">
                <p className="text-center lg:text-[16px] text-[14px]">
                  New to Dash Pack? These adventures are the perfect
                  introduction.
                </p>
              </div>
              <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
            </div>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 basis-1/1 lg:basis-1/4">
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
                        className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg text-[18px] px-8 py-2.5 w-full mb-2"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 basis-1/1 lg:basis-1/4">
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
                        className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg text-[18px] px-8 py-2.5 w-full mb-2"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 basis-1/1 lg:basis-1/4">
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
                        className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg text-[18px] px-8 py-2.5 w-full mb-2"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 basis-1/1 lg:basis-1/4">
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
                        className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg text-[18px] px-8 py-2.5 w-full mb-2"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 basis-1/1 lg:basis-1/4">
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
                        className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg text-[18px] px-8 py-2.5 w-full mb-2"
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-[-50px] left-1/2 ">
              <CarouselPrevious className="" />
              <CarouselNext className="" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
}
