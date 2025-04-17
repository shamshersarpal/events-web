import Header from "@/components/Header";
import Image from "next/image";
import imgright from "@/images/ad1.jpg";
export default function registeruser() {
  return (
    <>
      <Header />
      <main className="mt-[114px]">
        <section className="">
          <div className="max-w-screen-xl mx-auto lg:px-0 px-4">
            <div className="container relative">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-6 ">
                <div className="lg:col-span-6 md:col-span-7">
                  <h2 className="text-xl font-semibold mb-2">
                    Personal Information
                  </h2>
                  <form className="max-w-[360px] w-full">
                    <div className="mb-3">
                      <label>First Full Name (as on passport)</label>
                      <input
                        type="text"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                      />
                    </div>
                    <div className="mb-3">
                      <label>Gender (as on passport)</label>
                      <select className="w-full border p-2 mt-1 rounded-lg bg-gray-100">
                        <option defaultValue="US">Select...</option>
                        <option value="US">Male</option>
                        <option value="CA">Female</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label>Date of Birth (as on passport)</label>
                      <input
                        type="text"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        placeholder="DD/MM/YYYY"
                      />
                    </div>
                    <div className="mb-3">
                      <label>Nationality</label>
                      <select className="w-full border p-2 mt-1 rounded-lg bg-gray-100">
                        <option defaultValue="US">Select...</option>
                        <option value="US">USA</option>
                        <option value="CA">India</option>
                      </select>
                    </div>

                    <h2 className="text-xl font-semibold mb-2 mt-4">
                      Account Information
                    </h2>
                    <div className="mb-3">
                      <label>Phone Number</label>
                      <div className="flex gap-3">
                        <select className=" w-[60px] border  mt-1 rounded-lg bg-gray-100">
                          <option defaultValue="US">+1</option>
                          <option value="US">+91</option>
                          <option value="CA">+93</option>
                        </select>
                        <input
                          type="text"
                          className=" border p-2 mt-1 rounded-lg bg-gray-100 w-full"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label>Email</label>
                      <input
                        type="email"
                        className="w-full border p-2 mt-1 rounded-lg bg-gray-100"
                        placeholder=""
                        value="johan@email.com"
                        readOnly
                      />
                    </div>
                    <div className="mb-3 pb-20">
                      <button
                        type="button"
                        className="text-white bg-[#7F5539] border border-[#7F5539] focus:outline-none   font-medium rounded-lg lg:text-[18px] lg:px-8 lg:py-3.5 mb-2 px-4 py-2 text-[14px] mt-4"
                      >
                        Sumbit
                      </button>
                    </div>
                  </form>
                </div>

                <div className="lg:col-span-6 md:col-span-5 px-4 lg:block hidden">
                  <div className=" sticky top-[120px]">
                    <Image
                      className="w-full rounded-xl h-[550px] object-cover shadow-sm"
                      src={imgright}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
