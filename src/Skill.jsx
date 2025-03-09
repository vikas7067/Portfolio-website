import { useState, useRef, useEffect } from "react";





function Skill() {

  const [hoverState, setHover] = useState(false);
    const [hoverState1, setHover1] = useState(false);
    const [isManualScroll, setIsManualScroll] = useState(false);
    const [isInView, setIsInView] = useState(false); // Track visibility
    const sectionRef = useRef(null);
  
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
          left: ref.current.scrollLeft + 300,
          behavior: "smooth",
        });
        setIsManualScroll(true); // Stop auto-scroll when manually scrolled
      }
    };
  
    const scrollRig = () => {
      if (ref.current) {
        ref.current.scrollTo({
          left: ref.current.scrollLeft - 300,
          behavior: "smooth",
        });
        setIsManualScroll(true); // Stop auto-scroll when manually scrolled
      }
    };

    useEffect(() => {
      if (isManualScroll) {
        // If user manually scrolls, pause auto-scroll for 5 seconds
        const timeout = setTimeout(() => setIsManualScroll(false), 2000);
        return () => clearTimeout(timeout);
      }
    }, [isManualScroll]);
  
    useEffect(() => {
      if (!isInView) return;
      const interval = setInterval(() => {
        if (!isManualScroll && ref.current) {
          ref.current.scrollBy({ left: 100, behavior: "smooth" });
        }
      }, 3000);
  
      return () => clearInterval(interval);
    }, [isManualScroll, isInView]);




    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.5 }
      );
  
      if (sectionRef.current) observer.observe(sectionRef.current);
  
      return () => {
        if (sectionRef.current) observer.unobserve(sectionRef.current);
      };
    }, []);



    const Skill = {
      skill: [
        { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/AutoCAD-Dark.svg", name: "Autocad" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVQLSgbJxK9wR1IbwZaqbQdzDIKMVNExjbg&s", name: "Solid Work" },
        { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoQRhTm4mr1SJHT6GIAb20QArC35RPZBYiA&s", name: "Fusion 360" },
        { src: "https://pic2-cdn.creality.com/content/cover/2e095e2e32b5d6ca46c1c5d7a22faf7e?x-oss-process=image/format,webp", name: "Creality Software" },
      ],
      languages: [
        { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/C.svg", name: "C" },
        { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/CPP.svg", name: "C++" },
        { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Python-Dark.svg", name: "Python" },
        { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Arduino.svg", name: "Arduino programming" },
        { src: "", name: "Can Interface" },
      ],
      os: [
        { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Windows-Dark.svg", name: "Windows" },
        { src: "https://github.com/tandpfun/skill-icons/raw/main/icons/Linux-Dark.svg", name: "Linux" },
        { src: "https://static-00.iconduck.com/assets.00/virtual-machine-icon-512x409-ac45inps.png", name: "Virtual Machine" },
      ],
      machine: [
        { src: "https://cdn-icons-png.flaticon.com/512/4824/4824990.png", name: "CNC Lathe Machine" },
        { src: "https://img.freepik.com/premium-psd/g-code-file-3d-illustration-icon_331343-2091.jpg", name: "G-Code" },
        { src: "https://geo-media.beatport.com/image_size/500x500/0aefbe34-3352-4bf6-8d55-5321f6460b93.jpg", name: "M-Code" },
        { src: "https://i0.wp.com/www.aotewell.com/wp-content/uploads/2011/10/802S-802C.jpg?ssl=1", name: "cnc sinumerik 802D Software" },
      ],
    };


    const skillCategories = [
      { title: "Skills", skills: Skill.skill },
      { title: "Programming Languages", skills: Skill.languages },
      { title: "Operating Systems", skills: Skill.os },
      { title: "Machines", skills: Skill.machine },
    ];


    const SkillCard = ({ title, skills }) => (
      <div className=" rounded-lg p-4 shadow-lg m-2 place-self-center place-items-center ">
        <h3 className="text-xl font-K2D font-semibold text-gray-200 mb-12">{title}</h3>
        <div className="flex xl:gap-12 sm:gap-5 gap-2 justify-center">
          {skills.map((skill, index) => (
            <div key={index} className={`lg:h-[152px] lg:w-[200px] md:h-32 md:w-40 h-28 w-36 bg-[#5339484a]  flex-col flex justify-center items-center gap-5 mx-2 rounded-xl ${index % 2 === 0 ? "rotate-y-24 rotate-x-24" :"-rotate-y-24 rotate-x-24"} `}>
              {skill.src ? (
                <img src={skill.src} alt={skill.name} className="lg:w-16 lg:h-16 md:h-12 md:w-12 h-10 w-10" />
              ) : (
                <div className="w-10 h-10 bg-gray-300 flex items-center justify-center -rotate-y-24">
                  <span className="text-xs">No Image</span>
                </div>
              )}
              <p className="text-[#93607d75] font-K2D font-bold w-full text-center md:text-lg text-sm">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );



  return (
    <div className="relative " ref={sectionRef}>

      <img src="WorkRobo.png" className="absolute xl:h-fit xl:w-fit w-24 left-0 xl:-top-20 top-7 sm:flex hidden"></img> 
      <img src="WorkMan.png" className="absolute xl:h-fit xl:w-fit h-80 -top-32 -right-10 sm:flex hidden"></img>  

      <div className="">




        <div className="flex flex-row justify-between items-center pt-24 xl:px-[160px] sm:px-20 px-8">
          <div className="">
            <h1 className="font-K2D sm:font-extrabold lg:text-[48px] sm:text-[36px] text-3xl font-bold text-white p-0">
              Skills
            </h1>
            <hr className="sm:w-24 w-20 border-0 h-[0.5px] bg-gradient-to-r from-[#3E3895] to-[#CC4CC0] mb-3"></hr>
          </div>

          {/* drop-shadow-[0px_4px_10px_#93607D] */}

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

        
        <div className=" h-[263px] w-full mt-14 flex overflow-scroll overflow-y-hidden mb-28" style={{scrollbarWidth:"none", backgroundColor:"rgba(147,96,125,0.03)"}} ref={ref}>
        {skillCategories.map((category, index) => (
          
          <SkillCard title={category.title} skills={category.skills} key={index} />
      
      ))}

        </div>



      </div>



    </div>
  );
}

export default Skill;
