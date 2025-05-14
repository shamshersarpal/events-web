 
import DatePicker from "@/components/DatePicker";
import Events from "@/components/Events";
import FindPerfecttrip from "@/components/FindPerfecttrip";
import Footer from "@/components/Footer";
import Fun from "@/components/Fun";
import Headerv2 from "@/components/Headerv2";
import HeaderTwo from "@/components/HeaderTwo";
import HeroSectionv2 from "@/components/HeroSectionv2";
import HowitWork from "@/components/HowitWork";
import InfoSection from "@/components/InfoSection";
import PopularAdventures from "@/components/PopularAdventures";
import Subscript from "@/components/Subscript";
import Testimonials from "@/components/Testimonials";
import TourSlider from "@/components/Tourdestination";  
import Image from "next/image";
import HeroSectionv3 from "@/components/HeroSectionv3";

export default function Home() {
  return (
    <>
    
    <Headerv2/>
    <HeroSectionv3/> 
    <TourSlider/>
    <HowitWork/>
    <Fun/>
    <Events/>
    <PopularAdventures/>
    <FindPerfecttrip/>
   
    <Testimonials/>
    <Subscript/>
    <Footer/>
    
    </>
  );
}
