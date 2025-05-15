import Link from "next/link";

export default function herov2() {
  return (
    <>
      <section className="mainHero relative">
        <div className="overlyhero"></div>
        <div className="max-w-screen-xl mx-auto lg:px-0 px-4 relative">
          <div className="lg:py-40 lg:pt-52 pt-48 py-20 text-center mx-w-[610px]">
            <h1 className="lg:text-[32px] text-[25px] font-[600] leading-none mb-8 text-black">
              YOUR SOCIAL PREREQUISITE
            </h1>
            <h1 className="lg:text-[35px] text-[18px] font-[600] leading-none mb-2 text-gray-950">
              MEET OTHER GOING TO THE{" "}
              <span className="text-[#fea759]">SAME </span>
            </h1>
            <h1 className="lg:text-[35px] text-[18px] text-center font-[600] leading-none mb-2 text-gray-950 cursor-pointer">
              <u className="">CONCERT</u> <u>VENU</u> <u>GAME</u>
            </h1>
          </div>

          <div className="flex items-center justify-between flex-wrap">
            <div className="lg:text-[25px] text-[18px]   font-[600] leading-none mb-2 text-gray-950 flex gap-1">
              <svg
                className="w-10 h-10  "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <br></br>

              <span>pregamebydash</span>
            </div>
            <div className="flex flex-wrap gap-1 my-5 px-4 justify-center lg:text-[25px] text-[18px]   font-[600] leading-none mb-2 text-gray-950 text-center">
              CURATED EVENTS | HANDPICKED GROUPS <br></br>
              SCAN TO PREGAME
            </div>

            <div className="lg:text-[25px] text-[18px]   font-[600] leading-none mb-2 text-gray-950 flex gap-1">
              <br></br>

              <span>pregamebydash.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
