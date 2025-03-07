import { Link } from "react-router-dom";

function Footer(){
  return(
    <div className="flex flex-col  w-full p-2">

      <div className="flex lg:gap-0 gap-10 border-2 border-t-0 lg:h-[350px] md:flex-nowrap flex-wrap border-[#1C1C21] h-full">
        
        <div className="border-2 border-b-0 border-t-0 border-l-0 border-[#1C1C21] flex flex-col gap-5 items-center justify-center xl:w-1/2 w-2xl  place-self-center">

          <div className="uppercase text-[#797C86] font-Manrope text-base font-semibold ">Robotics is Robolutionizing the Industry</div>

          <div className="uppercase text-white font-Manrope font-semibold text-4xl align-middle h-full">
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
          Work Together
        </div>



        </div>




        <div className="flex lg:flex-row items-center justify-center xl:flex-nowrap flex-wrap w-full font-Manrope  xl:gap-32 lg:gap-16 sm:gap-18 gap-10 place-self-center h-full">

          <div className="flex flex-col  text-[#F2F2F3] gap-3 w-fit">
            <div className="font-semibold text-base text-[#797C86]">Home</div>
            <Link to="/Experience">Experience</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/Education">Education</Link>
          </div>

          <div className="flex flex-col text-[#F2F2F3] gap-3">
            <div className="font-semibold text-base text-[#797C86]">Quick Links</div>
            <a href="https://drive.google.com/file/d/18_nS_NIfniiWPSNhnmIM03EpW6N97h90/view?usp=drive_link">CV</a>
            <a></a>
            <a></a>
          </div>

          <div className="flex flex-col text-[#F2F2F3] gap-3">
            <div className="font-semibold text-base text-[#797C86]">Follow me</div>
            <a href="https://www.linkedin.com/in/vikashofficial2848"
            target="_blank">Linkedln</a>
            <a href="/">Github</a>
            <a></a>
          </div>

          <div className="flex flex-col text-[#F2F2F3] gap-3">
            <div className="font-semibold text-base text-[#797C86]">Social Media</div>
            <a href="https://x.com/Vikash179532">Twitter</a>
            <a href>Instagram</a>
            <a href="">Facebook</a>
          </div>


        </div>

      </div>

      <div className="flex flex-wrap justify-between items-center xl:px-10 px-2 lg:h-20 h-16">

         <p className="font-Manrope text-sm font-light text-[#797C86]">Terms & Conditions | Privacy Policy</p>
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
                    href="https://x.com/Vikash179532"
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

         <p className="font-Manrope text-sm font-light text-[#797C86]">© 2024 VIKASH CHAUHAN. All rights reserved.</p>
      </div>
    
    </div>
  );
}

export default Footer;