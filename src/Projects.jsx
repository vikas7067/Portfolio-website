import { useState} from "react";
import { Link } from "react-router-dom";


function ProjectCard({img,Tittle,Company, Technologies}) {
  
  const [isHovered  , setHovered] = useState(false);
   

  return (  // <-- Add this return statement
    
      
      <div
        className={`overflow-hidden relative xl:p-7 xl:py-7 p-5 py-5 max-w-full rounded-xl border border-solid border-[color:var(--Dark-12,#1C1C21)] lg:min-h-[460px] xl:w-[325px] w-72 max-md:pl-5 min-h-[477px] ${isHovered?"shadow-2xl shadow-[#93607d7c]" :""} `}
        style={{
          background:
          isHovered?  "linear-gradient(to bottom right, rgba(14, 14, 16, 1), rgba(14, 31, 36, 0.61), rgba(147, 96, 125, 0.22))":  "linear-gradient(to bottom right, rgba(147, 96, 125, 0.22), rgba(83, 57, 72, 0.45), rgba(14, 14, 16, 1))",
          
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="region"
        aria-label="Robotic Manipulator Project Card"
      >
      
        

        <article className="flex flex-col w-full text-white">

        <img src="ShapeP.png" className="absolute top-0 right-0 opacity-60" />
        <img src="Shapep1.png" className="absolute  bottom-0 left-0  opacity-60" />

        <div className="flex flex-col xl:gap-[15px] gap-2.5 z-10 justify-center items-center ">
          
          <h2 className="xl:text-[19px] text-lg font-semibold font-Inter tracking-wider z-10">
            {Tittle}
          </h2>
          <img
            src={img}
            alt="Six Axis Robotic Manipulator"
            className="rounded-lg h-40 w-full"
          />
          <p className="self-stretch  text-neutral-500 z-10 font-Manrope font-normal">{Company}</p>
          <p className="  w-full leading-6 rounded-none max-md:pr-5 z-10 font-Manrope font-light xl:text-[16px] text-sm">
            Technologies : {Technologies}
          </p>
          <div className=" max-w-full z-10 ">
            <button className=" lg:w-[133px] lg:h-[42px] w-28 h-8 flex items-center rounded-full bg-gradient-to-r from-[#A5B4FC] to-[#EA79FF] px-[1px]  py-[1px] overflow-hidden">
              <div className=" bg-black hover:bg-[#3E3895] h-full w-full rounded-full flex items-center justify-between">
                <span className="text-white font-normal leading-relaxed text-[13px] pl-8 font-Inter">
                  Details
                </span>
                <div className="lg:w-[42px] h-8 w-8 lg:h-[42px]  rounded-full  bg-gradient-to-r from-[#F9A2D4] via-[#C261FF] to-[#9747FF] flex items-center justify-center hover:rotate-37">
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
          
        </div> 

          
        </article>
      </div>
    
  );
}


function Projects() {



  

  const projectCard = [
    {
      Tittle:"Six Axis Robotic Manipulator(Payload 4Kg)",
      Company:"Orangewood Lab",
      img:"6axis-manipulator.jpg",
      Tech:"SolidWorks, Fusion360,3D Print, URDF, RMD Actuators, ARSEC Actuators, DH Parameter, ROS RViz, ROS, CNC",
      extrapoints: ["Mechanical design , assembly and manufacture of six-axis manipulator by DH parameter","Mechanical design , assembly and manufacture of six-axis manipulator by DH parameter"],
    },
    {
      Tittle:"Dual Encoder Backlash Compensate of gearbox and Actuator control",
      Company:"Orangewood Lab",
      img:"dual_encoder_project.jpg",
      Tech:"Absolute Encoder, Planetary Gears, Harmonic Gearbox, ODrive S1, BLDC Motors, SSI, SPI, PWM, CAN Protocol",
      extrapoints: ["∗ Research And Develop a hardware set up dual encode project","Tech found: gearbox positional control by SSI And SPI communication and control PWM interface"],
    },
    {
      Tittle:"Robotic finger Hand (holding capacity 2Kg)",
      Company:"Orangewood Lab",
      img:"Robotic_Hand.png",
      Tech:"Servo Actuators,ESP,Flex Sensors,C++ Programming, Python Tkinter (GUI),3D Printing, Sketch Design,Motion Planning",
      extrapoints: ["∗ Research And Develop a hardware set up dual encode project","Tech found: gearbox positional control by SSI And SPI communication and control PWM interface"],
    }
  ];
  



  return (
    <div className="relative">
      <img src="projectRobo.png" className="absolute xl:h-fit xl:w-fit lg:w-36 w-32 xl:top-0 -top-15 sm:flex hidden"></img>
      <img src="Exp1.png" className="absolute xl:h-fit xl:w-fit h-56 xl:right-0 -right-3 sm:flex hidden"></img>

      <div className="xl:px-[168px] sm:px-20 px-8">
        <div className="flex flex-row justify-between items-center pt-24">
          <div className="">
            <h1 className="font-K2D sm:font-extrabold lg:text-[48px] sm:text-[36px] text-3xl font-bold text-white p-0">
              Featured <span className="text-[#AC5FDA]">Projects</span>
            </h1>
            <hr className="sm:w-60 w-20 sm:ml-6 border-0 h-[0.5px] bg-gradient-to-r from-[#3E3895] to-[#CC4CC0] mb-3"></hr>
          </div>

          {/* drop-shadow-[0px_4px_10px_#93607D] */}

          <Link to="/AllProject" className=" lg:w-[147px] w-32 lg:h-[46px] sm:h-10 flex items-center rounded-full bg-gradient-to-r from-[#A5B4FC] to-[#EA79FF] px-[1px]  py-[1px] overflow-hidden" >
            <div className=" bg-black hover:bg-[#3E3895] h-full w-full rounded-full flex items-center justify-between">
              <span className="text-white font-normal leading-relaxed text-[13px] lg:px-6 pl-5 font-Inter">
                View All
              </span>
              <div className="lg:w-[46px] lg:h-[46px] h-10 w-10 rounded-full  bg-gradient-to-r from-[#F9A2D4] via-[#C261FF] to-[#9747FF] flex items-center justify-center hover:rotate-37">
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
          </Link>
        </div>

        <div className="flex lg:flex-row lg:flex-nowrap flex-wrap xl:gap-15 lg:gap-6 gap-7 pt-[50px] items-center justify-center">
          {projectCard.map((project, index)=>(
            <ProjectCard 
              key={index}
              img={project.img}
              Company={project.Company}
              Tittle={project.Tittle}
              Technologies={project.Tech}
              />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
