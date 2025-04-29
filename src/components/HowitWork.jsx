export default function HowitWork() {
  return (
    <>
      <section className="lg:pt-[80px] pt-[40px]">
        <div className="max-w-[800px] mx-auto lg:px-0 px-4">
          <div className="pb-10">
            <h2 className="lg:text-4xl text-2xl font-bold text-center">
              How It Works
            </h2>
            <div className="lg:w-[100px] w-[50px] h-[4px] mt-2 rounded-[50px] bg-[#7F5539] mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-4 gap-6">
            <div className="border border-[#B08968] rounded-[20px] p-4 bg-[#EDE0D4] relative h-full">
              <div className="text-center flex justify-center absolute left-1/2 transform -translate-x-1/2 top-[-20px] z-10">
                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[100px] bg-[#B08968] text-white text-[22px]">
                  1
                </div>
              </div>

              <h2 className="text-center lg:text-[22px] text=[20px] font-[600] mt-5">
               Find Events
              </h2>
              <p className="text-[#585858] text-center lg:text-[16px] text-[14px]">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>

            <div className="border border-[#B08968] rounded-[20px] p-4 bg-[#EDE0D4] relative h-full">
              <div className="text-center flex justify-center absolute left-1/2 transform -translate-x-1/2 top-[-20px] z-10">
                <div className="h-[40px] w-[40px] flex items-center justify-center rounded-[100px] bg-[#B08968] text-white text-[22px]">
                  2
                </div>
              </div>

              <h2 className="text-center lg:text-[22px] text=[20px] font-[600] mt-5">
               Book Calender
              </h2>
              <p className="text-[#585858] text-center lg:text-[16px] text-[14px]">
              Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </p>
            </div>

             

            
          </div>
        </div>
      </section>
    </>
  );
}
