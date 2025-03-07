import { useState, useRef } from "react";

function EducationCard({ img, clg, Course, link}) {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="flex flex-col items-end h-full">
      <article
        className={`*:overflow-hidden relative xl:py-6 py-4 pr-5 pl-5 max-w-full max-h-full rounded-xl border border-solid border-[color:var(--Dark-12,#1C1C21)] min-h-[343px] xl:w-[317px] sm:w-[260px] w-3xs max-md:pl-5 ${
          isHovered ? "shadow-2xl shadow-[#93607d7c] " : ""
        }`}
        style={{
          background: isHovered
            ? "linear-gradient(to bottom right, rgba(14, 14, 16, 1), rgba(14, 31, 36, 0.61), rgba(147, 96, 125, 0.22))"
            : "linear-gradient(to bottom right, rgba(147, 96, 125, 0.22), rgba(83, 57, 72, 0.45), rgba(14, 14, 16, 1))",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img src="ShapeP.png" className="absolute top-0 right-0 opacity-60" />
        <img
          src="Shapep1.png"
          className="absolute  bottom-0 left-0  opacity-60"
        />
        <div className="flex flex-col items-center w-full h-full">
          <img
            src={img}
            alt="Education institution campus or building"
            className="object-contain w-full rounded-3xl aspect-[1.80] z-20"
          />
          <div className="flex flex-col items-end xl:mt-3.5 mt-2 w-full xl:h-36 md:h-48 h-fit z-20">
            <h2 className="text-lg font-medium xl:leading-7 leading-6 text-zinc-200">
              {clg}
            </h2>
            <p className="xl:mt-2 mt-1.5 text-sm xl:leading-5 text-neutral-500 z-20 justify-start">
              {Course}
            </p>
            <a href={link} className="w-[42px] h-[42px] rounded-full bg-radial to-[#3E3895] from-[#CC4CC0] z-20">

            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

function Education() {
  const [hoverState, setHover] = useState(false);
  const [hoverState1, setHover1] = useState(false);

  const ChangeHover = () => {
    setHover(!hoverState);
  };

  const ChangeHover1 = () => {
    setHover1(!hoverState1);
  };

  const ref = useRef(null);

  const scroll = () => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRig = () => {
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft - 200, // Adjust value for desired scroll distance
        behavior: "smooth", // Enables smooth scrolling
      });
    }
  };

  const cardData = [
    {
      img: "https://cdn.builder.io/api/v1/image/assets/a587ba5ee83947b1a3571920d414175b/15da8c0e252374ae932c6fda4232d0eb3d98491e4934c035d2e24306bbd54823?placeholderIfAbsent=true",
      clg: "Rustamji Institute of Technology Tekanpur Gwalior",
      Course: "Bachelor of Technology in Mechanical Engineering • 2020 - 2024",
      link: "",
    },
    {
      img: "https://www.manufacturingtodayindia.com/cloud/2023/05/24/QM5cfmDU-OrangeWood-1200x675.png",
      clg: "Rustamji Institute of Technology Tekanpur Gwalior",
      Course: "Higher Secondary or Tntermediate • 2020 - 2024",
      link: "",
    },
    {
      img: "https://www.manufacturingtodayindia.com/cloud/2023/05/24/QM5cfmDU-OrangeWood-1200x675.png",
      clg: "Rustamji Institute of Technology Tekanpur Gwalior",
      Course: "Bachelor of Technology in Mechanical Engineering • 2020 - 2024",
      link: "",
    },
  ];

  return (
    <div className="relative">
      <img src="Exp1.png" className="absolute  xl:h-fit xl:w-fit h-56 xl:right-0 -right-3 sm:flex hidden -top-5"></img>
      <img
        src="EduRobo.png"
        className="absolute xl:h-fit xl:w-fit w-32 left-0 xl:-top-40 -top-28 sm:flex hidden"
      ></img>

      <div className="xl:px-[168px] sm:px-20 px-8">
        <div className="flex flex-row justify-between items-center pt-15 ">
          <div className="flex flex-col ">
            <div className="flex flex-row gap-2">
              <img src="image.png" className="w-fit h-fit "></img>
              <h6 className="font-K2D font-normal text-[#AC5FDA] leading-relaxed text-[14px]">
                My Qualifications
              </h6>
            </div>
            <h1 className="font-K2D sm:font-extrabold lg:text-[48px] sm:text-[36px] text-3xl font-bold text-white p-0">
              Education
            </h1>
            <hr className="lg:w-48 w-30 border-0 h-[1px] bg-gradient-to-r from-[#3E3895] to-[#CC4CC0] mb-3"></hr>
          </div>
          <div className="flex flex-row">
            <button
              className="bg-gradient-to-b from-[#EA79FF] to-[#9747FF] lg:p-1 p-[3px] lg:h-[57px] lg:w-[57px] sm:w-12 sm:h-12 h-10 w-10 rounded-full "
              onMouseEnter={ChangeHover}
              onMouseLeave={ChangeHover}
              onClick={scrollRig}
            >
              <div
                className={`w-full h-full flex items-center  justify-center${
                  hoverState
                    ? "bg-gradient-to-b from-[#EA79FF] to-[#9747FF] rounded-full items-center  justify-center"
                    : " bg-black rounded-full items-center  justify-center"
                }`}
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.5 1L1.5 8L8.5 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
            <button
              className="bg-gradient-to-b from-[#EA79FF] to-[#9747FF] lg:p-1 p-[3px] lg:h-[57px] lg:w-[57px] sm:w-12 sm:h-12 h-10 w-10 rounded-full align-middle"
              onMouseEnter={ChangeHover1}
              onMouseLeave={ChangeHover1}
              onClick={scroll}
            >
              <div
                className={`w-full h-full flex items-center  justify-center${
                  hoverState1
                    ? "bg-gradient-to-b from-[#EA79FF] to-[#9747FF] rounded-full items-center  justify-center"
                    : " bg-black rounded-full items-center  justify-center"
                }`}
              >
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 1L8.5 8L1.5 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        <div
          className="flex flex-row xl:gap-12 lg:gap-8 gap-11 items-center overflow-x-scroll overflow-y-hidden lg:pt-[50px] pt-11 lg:pb-10 pb-8 h-full"
          style={{ scrollbarWidth: "none", scrollBehavior: "revert-layer" }}
          ref={ref}
        >
          {cardData.map((data, index) => (
            <EducationCard key={index} img={data.img} clg={data.clg} Course={data.Course} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
