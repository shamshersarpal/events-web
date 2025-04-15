import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TourOne from "@/images/desti-1.png";
import TourTwo from "@/images/desti-2.png";
import TourThree from "@/images/desti-3.png";
import TourFour from "@/images/desti-4.png";
import TourFive from "@/images/desti-5.png";
import TourSix from "@/images/desti-6.png";
import TourSeven from "@/images/desti-7.png";
import TourBox from "./TourBox";

export default function TourSlider() {
  const slides = [
    {
      title: "New York",
      imageSrc: TourOne,
    },
    {
      title: "California",
      imageSrc: TourTwo,
    },
    {
      title: "Los Angeles",
      imageSrc: TourThree,
    },
    {
      title: "Houston",
      imageSrc: TourFour,
    },
    {
      title: "Chicago",
      imageSrc: TourFive,
    },
    {
      title: "Japan",
      imageSrc: TourSix,
    },
    {
      title: "India",
      imageSrc: TourSeven,
    },
  ];

  return (
    <>
      <div className="container py-20 px-4 bg-[#FFFCFA]">
        <div className="max-w-screen-xl   mx-auto">
          <div className="flex flex-wrap items-center justify-between"></div>
          <Carousel
            className="max-w-screen-xl mx-auto "
            opts={{
              align: "start",
            }}
          >
            <div className="pb-10">
              <h2 className="lg:text-4xl text-2xl font-bold text-center">
                Top destinations
              </h2>
              <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
            </div>
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 basis-1/2 lg:basis-1/6"
                >
                  <div>
                    <TourBox
                      title={slide.title}
                      imageSrc={slide.imageSrc}
                      rating={slide.rating}
                      score={slide.score}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute bottom-[-50px] left-1/2  ">
              <CarouselPrevious className="" />
              <CarouselNext className="" />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
