import Link from "next/link";

export default function herov2() {
  return (
    <>
      <section className="mainHero relative">
        <div className="overlyhero"></div>
        <div className="max-w-screen-xl mx-auto lg:px-0 px-4 relative">
          <div className="lg:py-40 lg:pt-52 pt-48 py-20 text-left mx-w-[610px]">
            <h1 className="lg:text-[22px] text-[25px] font-[500] leading-none mb-4 text-white">
              YOUR SOCIAL PREREQUISITE
            </h1>
            <h1 className="lg:text-[45px] text-[18px] font-[600] leading-none mb-2 text-white">
              MEET OTHER GOING TO THE{" "}
              <span className="text-[#fea759]">SAME </span>
            </h1>
            <h1 className="lg:text-[45px] text-[18px] text-left font-[600] leading-none mb-2 text-white cursor-pointer">
              <u className="">CONCERT</u> <u>VENU</u>{" "}
              <u className="text-white">GAME</u>
            </h1>

            <div className="  lg:text-[18px] text-[18px] mt-5  font-[500] leading-none mb-2 text-white">
              CURATED EVENTS | HANDPICKED GROUPS SCAN TO PREGAME
            </div>
          </div>

          <div className="flex items-center justify-between flex-wrap pb-5">
            <div className="lg:text-[15px] text-[15px] font-[500] leading-none text-white flex gap-1 items-center">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
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

              <span className="relative top-[-2px]"> pregamebydash</span>
            </div>
            <div className="lg:text-[15px] text-[15px] font-[500] leading-none text-white flex gap-1 items-center">
              <svg
                className="w-5 h-5  "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
                  clipRule="evenodd"
                />
              </svg>

              <span>pregamebydash.com</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
