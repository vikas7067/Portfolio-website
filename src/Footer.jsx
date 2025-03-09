import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col  w-full px-2 xl:pt-30 lg:pt-20 pt-16 ">
      <div className="flex lg:gap-0 gap-10 border-2 border-t-0 lg:h-[350px] md:flex-nowrap flex-wrap border-[#1C1C21] h-full">
        <div className="md:border-r-2 md:border-b-0
         border-b-2 border-[#1C1C21] flex flex-col gap-5 items-center justify-center py-5 xl:w-1/2 md:w-2xl  w-full ">
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="uppercase text-[#797C86] font-Manrope lg:text-base sm:text-sm text-xs font-semibold ">
              Robotics is Robolutionizing the Industry
            </div>

            <div className="uppercase text-white font-Manrope font-semibold lg:text-4xl sm:text-3xl  text-2xl h-full ">
              <div className="flex gap-3 items-center">
                <span className="">Let's</span>{" "}
                <button className="bg-radial to-[#9747FF] from-[#93607D] h-[66px] w-[66px] rounded-full align-middle place-items-center">
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
              Work Together
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center xl:flex-nowrap flex-wrap w-full font-Manrope  xl:gap-32 lg:gap-16 sm:gap-x-28 gap-x-15 gap-y-5 place-self-center h-full py-5">
          <div className="flex flex-col  text-[#F2F2F3] gap-3 w-fit">
            <div className="font-semibold text-base text-[#797C86]">Home</div>
            <Link to="/Experience " className="lg:text-sm text-xs">
              Experience
            </Link>
            <Link to="/AllProject" className="lg:text-sm text-xs">
              Projects
            </Link>
            <Link to="/Education" className="lg:text-sm text-xs">
              Education
            </Link>
          </div>

          <div className="flex flex-col text-[#F2F2F3] gap-3">
            <div className="font-semibold text-base text-[#797C86]">
              Quick Links
            </div>
            <a
              href="https://drive.google.com/file/d/18_nS_NIfniiWPSNhnmIM03EpW6N97h90/view?usp=drive_link"
              className="lg:text-sm text-xs"
              target="blank"
            >
              CV
            </a>
            <Link to="/About" className="lg:text-sm text-xs">
              Contact Details
            </Link>
            <Link to="/Contact" className="lg:text-sm text-xs">
              Message Me
            </Link>
          </div>

          <div className="flex flex-col text-[#F2F2F3] gap-3">
            <div className="font-semibold text-base text-[#797C86]">
              Follow me
            </div>
            <a
              href="https://www.linkedin.com/in/vikashofficial2848"
              target="_blank"
              className="lg:text-sm text-xs"
            >
              Linkedln
            </a>
            <a href="https://github.com/vikas7067" target="blank"  className="lg:text-sm text-xs">
              Github
            </a>
            <a href="/" className="lg:text-sm text-xs">
              Leetcode
            </a>
          </div>

          <div className="flex flex-col text-[#F2F2F3] gap-3">
            <div className="font-semibold text-base text-[#797C86]">
              Social Media
            </div>
            <a href="https://x.com/Vikash179532" className="lg:text-sm text-xs" target="blank">
              Twitter
            </a>
            <a href="" className="lg:text-sm text-xs" target="blank">
              Instagram
            </a>
            <a href="" className="lg:text-sm text-xs">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center lg:p-5 p-2 h-fit ">
        <p className="font-Manrope md:text-sm text-xs font-light text-[#797C86]">
          Terms & Conditions | Privacy Policy
        </p>
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
            aria-label="Social media" target="blank"
          >
            <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
              <img src="Facebook.png" className="h-fit w-fit" />
            </div>
          </a>
        </div>

        <p className="font-Manrope text-sm font-light text-[#797C86]">
          © 2024 VIKASH CHAUHAN. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
