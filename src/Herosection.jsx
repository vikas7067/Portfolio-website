import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import Projects from "./Projects";
import Work from "./work";
import Education from "./Education";
import Skill from "./Skill";
import Contact from "./Contact";
import About from "./About";
import LinkedlnIntro from "./Linkedln";
import Experience from "./Experience";
function Herosection() {

  const [dateState, setDateState] = useState(new Date());

  const t = new Date();
  const c = t.getHours() - 12;
  
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 1000);
  }, []);


  return (
    <>
      <div className="relative sm:h-screen h-[500px]"  style={{scrollbarWidth:"none"}} >
      <video
        className="w-full h-full absolute object-cover"
        src="/Background.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="justify-self-center flex md:w-[712px] w-full flex-col items-center place-content-center md:gap-[30px] gap-5 h-full ">
        {/* Name */}
        <h1 className="text-white md:font-extrabold font-bold font-Inter xl:text-[80px] lg:text-7xl md:text-6xl text-4xl  lg:leading-[97px] sm:leading-[60px] tracking-[0.03em] drop-shadow-[4px_4px_20px_#93607D]">
          Vikash Chauhan
        </h1>

        <div className="z-10 flex flex-col md:gap-5 xs:gap-3 gap-2 font-Inter ">
          {/* Job Title */}
          <h2 className="text-white md:text-[22px] text-base font-light leading-[20px] text-center tracking-[0.01em]">
            <TypeAnimation
              sequence={["R&D Project Engineer in Robotics", 1000]}
              speed={40}
              repeat={Infinity}
              style={{ color: "white" }}
            />
          </h2>
          <h2 className="text-white md:text-[22px] text-base font-light leading-[20px] text-center tracking-[0.01em] ">
            <TypeAnimation
              sequence={[
                "I am a Robotic Engineer",
                1000,
                "I am Robot Designer (CAD, CAM and Robotic Stimulation)",
                1000,
                "I am Hardware System Programmer",
                1000,
                "I'm a Firmware Programmer (Program Embedded System)",
                1000,
                "Expert in Manufacturing Prototyping and 3D Printing",
                1000,
                "Working on ROS Gazebo and Rviz Stimulation",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ fontSize: "", color: "white" }}
            />
          </h2>
        </div>

        {/* Animated Text */}

        {/* CV Button */}
        <a className="relative md:w-[214px] w-42 md:h-[49px] h-10 flex items-center rounded-full shadow-lg shadow-[#F9A2D4] bg-gradient-to-r from-[#A5B4FC] to-[#EA79FF] sm:px-0.5  sm:py-0.5 p-[1px] " href="https://drive.google.com/file/d/18_nS_NIfniiWPSNhnmIM03EpW6N97h90/view?usp=drive_link" target="blank">
          <div className=" bg-black hover:bg-[#3E3895] h-full w-full rounded-full flex items-center">
            <span className="text-white md:font-normal font-light leading-relaxed md:text-[13px] text-xs md:px-9 px-5 font-Inter">
              Download my CV
            </span>
            <div className="absolute right-0 md:w-[48px] md:h-[45px] w-10 h-10 rounded-full  bg-gradient-to-r from-[#F9A2D4] via-[#C261FF] to-[#9747FF] flex items-center justify-center hover:rotate-38 ">
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

        <div className="absolute bottom-4 left-4 z-20 text-white text-[15px] font-K2D font-bold">
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
          hour12: false,
          day:"2-digit"
        })}
        </div>
      </div>
    </div>
    <About/>
    <LinkedlnIntro/>
    <Experience/>
    <Projects/>
    <Work/>
    <Education/>
    <Skill/>
    <Contact/>
    </>
  );
}

export default Herosection;
