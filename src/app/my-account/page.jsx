import Footer from "@/components/Footer";
import HeaderTwo from "@/components/HeaderTwo";

export default function Myaccount() {
  return (
    <>
     <HeaderTwo/>
      <section>
       
        <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
          <div className="text-center max-w-screen-xl mx-auto  border shadow-sm border-[#B08968] py-3 px-5 mt-4 w-fit sticky top-[0px] bg-[#EDE0D4] z-40 rounded-[100px] ">
            <div className="flex items-center justify-center lg:gap-10 gap-3">
              <a href="#">
                {" "}
                <div className="font-[500] lg:text-[16px] text-[15px] cursor-pointer text-[#7F553A] hover:text-[#7F553A] ">
                  My Account
                </div>
              </a>

              <a href="#">
                <div className="font-[500] lg:text-[16px] text-[15px] cursor-pointer hover:text-[#7F553A] ">
                  My Trips
                </div>
              </a>
              <a href="#">
                <div className="font-[500] lg:text-[16px] text-[15px] cursor-pointer hover:text-[#7F553A] ">
                  Card details
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
