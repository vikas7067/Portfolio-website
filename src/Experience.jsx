import { useState, useRef } from "react";



function ContentCard({img, Designation, Company, Description}) {

  const [isHovered  , setHovered] = useState();
 

  return (
    <article
      className={`relative flex flex-col items-center lg:p-[30px] sm:p-7 p-6 py-5 sm:py-6 lg:pl-[30px] lg:py-7 gap-[15px] border border-[#1C1C21] rounded-[10px] bg-opacity-100 xl:w-[330px] lg:w-80 sm:w-72 w-3xs  lg:h-[562px] h-[480px] isolation-auto transition-shadow duration-300 ${
        isHovered ? "shadow-2xl shadow-[#93607d7c] " : ""
      }`}
      style={{
        background:
        isHovered?  "linear-gradient(to bottom right, rgba(14, 14, 16, 1), rgba(14, 31, 36, 0.61), rgba(147, 96, 125, 0.22))":  "linear-gradient(to bottom right, rgba(147, 96, 125, 0.22), rgba(83, 57, 72, 0.45), rgba(14, 14, 16, 1))",
        
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background abstract shapes */}
      <img src="Shape.png" className="absolute bottom-0 left-0 opacity-60" />
      <img src="Shape 1.png" className="absolute top-0 right-0 opacity-60" />

      {isHovered ? (
        <ul className="lg:w-[297px] sm:w-70 w-64 h-full lg:text-[14px] text-xs leading-[145%] text-[#E5E5E7] z-10 overflow-y-auto font-Manrope font-light list-disc pl-5 lg:space-y-0.5 space-y-1">
          {Description.map((point, index) => (
            <li key={index} className="lg:mb-2.5 mb-1.5">
              {point}
            </li>
          ))}
        </ul>
      ) : (
        <div className="z-10 flex flex-col lg:gap-3 sm:gap-2 gap-1 justify-center items-center">
          {/* Image */}
          <img src={img} alt="Robotic arm" className="sm:w-[236px] w-4xs lg:h-32 h-28 z-10 " />

          {/* Text container */}
          <div className="flex flex-col items-center w-fit h-fit z-10 lg:px-1 px-7">
            <h2 className="text-[18px] sm:font-extrabold font-bold font-Manrope text-[#E5E5E7] leading-[150%] text-center">
              {Designation}
            </h2>
            <p className="text-[15px] justify-self-center font-normal font-Manrope text-[#62646C] leading-[150%] ">
              {Company}
            </p>
          </div>

          {/* Paragraph (Bullet Points - Limited) */}
          <ul className="lg:w-[297px] sm:w-70 w-64 lg:h-[300px] sm:h-fit h-full lg:text-[14px] text-xs leading-[145%] text-[#E5E5E7] z-10 overflow-hidden font-Manrope font-light list-disc pl-5 lg:space-y-0.5 space-y-1">
            {Description.slice(0, 3).map((point, index) => (
              <li key={index} className="">
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}







function Experience() {
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

  const scrollRig =()=>{
    if (ref.current) {
      ref.current.scrollTo({
        left: ref.current.scrollLeft - 200, // Adjust value for desired scroll distance
        behavior: "smooth", // Enables smooth scrolling
      });
    }
  }
    
  

  const cardData = [
    {
      img: "https://www.manufacturingtodayindia.com/cloud/2023/05/24/QM5cfmDU-OrangeWood-1200x675.png",
      Designation: "Project Engineer",
      Company: "Orangewood Research And Advancement PVT Limited",
      Description: [
        "Successfully completed research on Robotic Manipulator, Robotic hand, PCB Stator motor, Plunger brake, and sandwich brake.",
        "Worked on mechanical research, design, assembly, and simulation analysis for research projects including PCB stator, plunger, and sandwich brake.",
        "Developed gripper control projects using a stepper motor and lead screw mechanism, control, and taught a manipulator using waypoints for food robotics and pick-and-place mechanisms."
      ],
    },
    {
      img: "https://www.manufacturingtodayindia.com/cloud/2023/05/24/QM5cfmDU-OrangeWood-1200x675.png",
      Designation: "R&D Mechanical Design Engineer",
      Company: "Orangewood Research And Advancement PVT Limited",
      Description: [
        "Successfully completed research on Robotic Manipulator, Robotic hand, PCB Stator motor, Plunger brake, and sandwich brake.",
        "Worked on mechanical research, design, assembly, and simulation analysis for research projects including PCB stator, plunger, and sandwich brake.",
        "Developed gripper control projects using a stepper motor and lead screw mechanism, control, and taught a manipulator using waypoints for food robotics and pick-and-place mechanisms."
      ],
    },
    {
      img: "https://www.swaayattrobots.com/static/image/swaayatt.png",
      Designation: "Mechatronics Engineer",
      Company: "Swaayatt Robots Pvt. Ltd",
      Description: [
        "Working on A.G.V Projects as a Mechatronics engineer.",
        "Working on mechanical research, design, and development of A.G.V, inventory control management, embedded controller programming, wheel odometry."
      ],
    },
    {
      img: "https://static.wixstatic.com/media/0c4428_2221e1a05b044f1b86e67c0a51cb264f~mv2.png/v1/crop/x_1592,y_0,w_888,h_864/fill/w_456,h_448,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled-2.png",
      Designation: "Robotics Engineer",
      Company: "SH Forhealth Solutions Private Limited",
      Description: [
        "worked on Robotic product ideas, research and develoment, CAD, prototyping, manufacturing, testing, andworked as a mechatronic engineer to build the manipulator for physiotherapy and research and build new beneficial end effectors (Attachments) for physiotherapy by manipulator.",
        "build shoulder wheel, Pull up bar attachment for passive and active exercise for physiotherapy.",
        "build brake testing device for manipulator and deep research and model of incremental and absolute encoder testing devices.",
        "controlled some devices by Arduino mega, raspberry pie, build mechanical shaft and key, manipulator mounting,etc."
      ],
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRojtZr-HlnAp-97eiayJHjl54nSvuT4wlL2A&s",
      Designation: "Robotic Team Core Member, Mechanical Training Head",
      Company: "Team Robolution RJIT(Robotics Team)",
      Description: [
        "Led a robotics team in CAD/CAM software projects, focusing on microcontrollers, sensors, and project manufacturing.",
        "Served as team lead for IIT Kharagpur competition (Sandrover) and achieved second-round runner-up in Parul University Roborace and Robosoccer.",
        "Coordinated robot part design, assembly, and testing with system integration using Arduino, ESP32, and STM32"
      ],
    }
  ];
   



  return (
    <div className="relative">
      <img src="Exp1.png" className="absolute xl:h-fit xl:w-fit h-56 xl:right-0 -right-3 sm:flex hidden"></img>

      <div className="xl:px-[168px] sm:px-20 px-8">
        <div className="flex flex-row justify-between items-center pt-15">
          <div className="">
            <h1 className="font-K2D sm:font-semibold lg:text-[48px] sm:text-[36px] text-3xl font-bold text-white p-0">
              Experience
            </h1>
            <hr className="lg:w-48 w-40 border-0 h-[0.5px] bg-gradient-to-r from-[#3E3895] to-[#CC4CC0] mb-3"></hr>
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
        
        <div className="flex flex-row gap-8 overflow-x-scroll overflow-y-hidden pt-12 h-full" style={{scrollbarWidth:"none", scrollBehavior:"revert-layer"}} ref={ref}>
        {cardData.map((data, index) => (
            <ContentCard
              key={index}
              img={data.img}
              Designation={data.Designation}
              Company={data.Company}
              Description={data.Description}
            />
          ))}
        </div>


      </div>
    </div>
  );
}

export default Experience;