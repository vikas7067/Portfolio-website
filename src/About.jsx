import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="h-fit relative">
      <img
        src="BackgroundAbout.png"
        className="h-fit w-fit absolute left-0"
      ></img>
      <img
        src="Robot_Back.png"
        className=" h-fit w-fit absolute left-0 top-[100.05px] md:flex hidden"
      />
      <img
        src="Ellipse.png"
        className=" lg:h-fit lg:w-fit h-[600px] w-[500px] absolute right-0 lg:top-0 bottom-5"
      />
      <img
        src="About-Robot.png"
        className=" xl:h-fit xl:w-fit h-80  absolute xl:right-0 -right-8 xl:top-[500.05px] bottom-20 md:flex hidden"
      />

      <div className="w-full xl:px-37 sm:px-20 px-10 pt-10 h-fit sm:pb-28 pb-20 ">

        {/* Top Heading */}
        <div className=" w-full place-items-center lg:pb-30 md:pb-28 pb-15">
          <h1 className="font-K2D sm:font-extrabold lg:text-[48px] sm:text-[36px] text-3xl font-bold text-white p-0">
            About Me
          </h1>
          <hr className="w-28 border-0 h-[1px] bg-gradient-to-r from-[#3E3895] to-[#CC4CC0] mb-3" />
          <div className="font-K2D sm:font-extrabold text-[14px] font-semibold tracking-wide text-white text-center">
            Explore my profile in depth - “The more you
            <br className="md:flex hidden "></br> read more you gain”
          </div>
        </div>


        {/* contain profile photo and Introduction */}
        <div className="flex lg:flex-row flex-col sm:gap-20 gap-15 w-full h-full justify-between items-center ">


          {/* Profile and Linkedln Button */}
          <div className="gap-0">
            <img
              src="VKProfile.png"
              className="p-0 xl:h-full sm:h-60 h-52 xl:w-full sm:w-64 w-56"
            />

            <a className="-top-5 xl:w-[275px] sm:w-64 w-56  sm:h-[57px] h-13 flex items-center  rounded-full shadow-lg drop-shadow-[0px_4px_10px_#93607D] bg-gradient-to-r from-[#A5B4FC] to-[#EA79FF] px-0.5  p-0.5 overflow-hidden"
            href="https://www.linkedin.com/in/vikashofficial2848">
              <div className=" bg-black hover:bg-[#3E3895] h-full w-full rounded-full flex items-center">
                <span className="text-white font-normal sm:leading-relaxed sm:text-[13px] text-xs xl:px-5 sm:px-3  px-2 font-Inter ">
                  Check out my Linkedln Profile
                </span>
                <div className="absolute right-0  sm:w-[57px] sm:h-[53px] h-13 w-13  rounded-full  bg-gradient-to-r from-[#F9A2D4] via-[#C261FF] to-[#9747FF] flex items-center justify-center hover:rotate-38 ">
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
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
            </a>
          </div>

          <div className="rounded-3xl border border-solid border-[color:var(--Dark-12,#1C1C21)] xl:h-[514px] xl:w-[600px]  sm:w-[520px] sm:h-[450] w-xs h-fit z-30">
            <div className="h-[253px] xl:p-8 sm:p-7 p-3 flex flex-col xl:gap-4 gap-2">
              <div className="flex gap-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.625 0L16.6933 12.8787L29.25 15L16.6933 17.1213L14.625 30L12.5567 17.1213L0 15L12.5567 12.8787L14.625 0Z"
                    fill="#AFA1F7"
                  />
                </svg>

                <h3 className="xl:text-2xl sm:text-[22px] text-[18px] font-normal text-[#CACACE] font-Manrope">
                  Introduction
                </h3>
              </div>
              <p className="text-[#AFB0B6] font-Manrope xl:text-base sm:text-[15px] text-sm">
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the worlds beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>

            <hr className="text-[color:var(--Dark-12,#1C1C21)]"></hr>

            <div className="flex flex-col xl:gap-8 gap-7 xl:p-8 p-7 font-Manrope lg:text-base text-sm">
              <div className="flex gap-4">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.625 0L16.6933 12.8787L29.25 15L16.6933 17.1213L14.625 30L12.5567 17.1213L0 15L12.5567 12.8787L14.625 0Z"
                    fill="#AFA1F7"
                  />
                </svg>

                <h3 className="xl:text-2xl sm:text-[22px] text-[18px] font-normal text-[#CACACE]">
                  Contact Information
                </h3>
              </div>

              <div className="flex sm:flex-row flex-col  xl:gap-4 sm:gap-6 gap-3">
                <div className="flex-1 shrink basis-0 min-w-60">
                  <h3 className="lg:text-base sm:text-lg text-sm font-medium text-[#E4E4E6]">
                    Email
                  </h3>
                  <p className="mt-1.5 lg:text-lg text-sm text-[#AFB0B6]">
                    vikashofficial2848@gmail.com
                  </p>
                </div>

                <div className="flex-1 shrink basis-0 min-w-60">
                  <h3 className="lg:text-base sm:text-lg text-sm font-medium text-[#E4E4E6]">
                    Phone Number
                  </h3>
                  <p className="mt-1.5 lg:text-lg text-sm text-[#AFB0B6]">
                    000000000
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col sm:gap-13 gap-3">
                <div className="flex flex-row gap-0">
                  <a
                    href="https://www.linkedin.com/in/vikashofficial2848"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex overflow-hidden justify-center items-center self-stretch rounded-full bg-gradient-to-b from-[#EA79FF] to-[#9747FF] xl:h-12 xl:w-12 sm:h-11 sm:w-11 w-9 h-9 sm:p-1 p-0.5  z-30"
                    aria-label="Social media"
                  >
                    <div className="h-full w-full rounded-full bg-black flex justify-center items-center">
                      <img src="Linkedln.png" className="h-fit w-fit" />
                    </div>
                  </a>

                  <a
                    href="https://x.com/Vikash179532" target="blank"
                    className="flex overflow-hidden justify-center  items-center self-stretch rounded-full bg-gradient-to-b from-[#EA79FF] to-[#9747FF] xl:h-12 xl:w-12 sm:h-11 sm:w-11 w-9 h-9 sm:p-1 p-0.5"
                    aria-label="Social media"
                  >
                    <div className="h-full w-full rounded-full bg-black flex justify-center items-center">
                      <img src="twitter.png" className="h-fit w-fit" />
                    </div>
                  </a>

                  <a
                    className="flex overflow-hidden justify-center  items-center self-stretch rounded-full bg-gradient-to-b from-[#EA79FF] to-[#9747FF] xl:h-12 xl:w-12 sm:h-11 sm:w-11 w-9 h-9 sm:p-1 p-0.5 "
                    aria-label="Social media"
                  >
                    <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
                      <img src="Facebook.png" className="h-fit w-fit" />
                    </div>
                  </a>
                </div>

                <div className="flex flex-row gap-4">
                  <Link to="/Contact" className="overflow-hidden flex-1 shrink  self-stretch lg:px-8 px-3 rounded-lg basis-0 bg-gradient-to-b from-[#EA79FF] to-[#9747FF] max-md:px-4 xl:h-12 h-11 text-white w-fit py-3">
                    Lets Work
                  </Link>

                  <a className="overflow-hidden flex-1 gap-2.5 self-stretch md:px-6 px-3 rounded-lg xl:h-12 h-11 border border-[#9747FF] bg-black border-solid basis-0 max-md:px-4 text-white w-fit lg:text-lg text-sm" target="blank"
                  href="https://drive.google.com/file/d/18_nS_NIfniiWPSNhnmIM03EpW6N97h90/view?usp=drive_link">
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
