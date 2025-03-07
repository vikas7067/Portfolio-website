function Contact() {
  return (
    <div className="relative pb-15 xl:px-[168px] sm:px-20 px-8">
      <img className="absolute lg:left-[155px] md:left-20 left-0 xl:w-fit w-xs top-0" src="Vikas.png" />
      <img
        src="WorkMan.png"
        className="absolute w-fit xl:h-fit xl:w-fit h-80 top-32 right-0 sm:flex hidden"
      ></img>

      <div className="flex flex-col items-center ">
        <h1 className="uppercase text-white xl:pl-32 md:pl-60 sm:pl-48 font-Manrope font-semibold lg:text-4xl text-3xl align-middle h-full z-40">
          <div className="flex gap-3 items-center">
            <span className="">Let's</span>{" "}
            <button className="bg-gradient-to-b from-[#9747FF] to-[#93607D] h-[66px] w-[66px] rounded-full align-middle place-items-center">
              <svg
                width="22"
                height="21"
                viewBox="0 0 22 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.4375 6.14673e-07L20.5 0C20.7486 0 20.9871 0.098772 21.1629 0.274587C21.3387 0.450403 21.4375 0.68886 21.4375 0.9375V15C21.4375 15.5178 21.0178 15.9375 20.5 15.9375C19.9822 15.9375 19.5625 15.5178 19.5625 15V3.20083L2.41291 20.3504C2.0468 20.7165 1.4532 20.7165 1.08709 20.3504C0.720971 19.9843 0.720971 19.3907 1.08709 19.0246L18.2367 1.875L6.4375 1.875C5.91973 1.875 5.5 1.45527 5.5 0.9375C5.5 0.419734 5.91973 6.14673e-07 6.4375 6.14673e-07Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          Collaborate
        </h1>

        <div
          className="min-w-xs lg:w-[422px] mx-10 rounded-sm sm:p-8 p-6 z-20"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(14, 14, 16, 1), rgba(83, 57, 72, 0.45), rgba(147, 96, 125, 0.22))",
          }}
        >
          <form className="grid gap-4 " onSubmit={{}}>
            <div className="grid gap-0.5">
              <label className="text-[#808D9E] text-sm leading-relaxed font-Inter">
                Name
              </label>
              <input
                type="text"
                className="min-w-64 w-full h-10  text-sm ring-offset-0 focus:outline-none border border-b-[#E2E2EA] border-l-0 border-r-0 border-t-0 focus:ring-1 focus:ring-[#93607da0]  text-white"
                placeholder="Enter Your Name"
                required
              ></input>
            </div>
            <div className="grid gap-0.5">
              <label className="text-[#808D9E] text-sm leading-relaxed font-Inter">
                Email
              </label>
              <input
                type="email"
                className="min-w-64 w-full h-10  text-sm ring-offset-0 focus:outline-none focus:ring-1 focus:ring-[#93607da0] text-white border border-b-[#E2E2EA] border-l-0 border-r-0 border-t-0"
                placeholder="Enter your Email"
                required
              ></input>
            </div>
            <div className="grid gap-0.5">
              <label className="text-[#808D9E] text-sm leading-relaxed font-Inter">
                Message
              </label>
              <textarea
                type="textarea"
                className="min-w-64 w-full sm:h-34 h-30 text-sm ring-offset-0 focus:outline-none focus:ring-1 focus:ring-[#93607da0] text-white border border-b-[#E2E2EA] border-l-0 border-r-0 border-t-0"
                placeholder="Enter Your Message"
                required
              ></textarea>
            </div>

            <div className=" max-w-full z-10 flex justify-center mt-2">
              <button className=" w-[133px] h-[42px] flex items-center rounded-full bg-gradient-to-r from-[#A5B4FC] to-[#EA79FF] px-[1px]  py-[1px] overflow-hidden">
                <div className=" bg-black hover:bg-[#3E3895] h-full w-full rounded-full flex items-center justify-between">
                  <span className="text-white font-normal leading-relaxed text-[13px] pl-8 font-Inter">
                    Submit
                  </span>
                  <div className="w-[42px] h-[42px]  rounded-full  bg-gradient-to-r from-[#F9A2D4] via-[#C261FF] to-[#9747FF] flex items-center justify-center hover:rotate-37">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:text-white "
                    >
                      <path
                        d="M8.84469 4.6628L1.67029 10.4545L0.871635 9.16736L8.04534 3.37556L2.74201 2.47535L3.01075 0.892172L10.7018 2.19769L9.22376 10.9051L7.82538 10.6678L8.84469 4.6628Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </button>
            </div>


          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
