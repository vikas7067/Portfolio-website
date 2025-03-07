import { useRef } from "react";

function Work(){

  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.play();
  }

  return(
    <div className="relative xl:px-[160px] sm:px-20 px-8">
       <img src="WorkRobo.png" className="absolute xl:h-fit xl:w-fit w-25 left-0 xl:top-0 top-7 sm:flex hidden"></img>
       <img src="WorkMan.png" className="absolute xl:h-fit xl:w-fit h-80 -top-28 right-0 sm:flex hidden"></img>

       <div className="flex flex-row justify-between items-center pt-28">
          <div className="">
            <h1 className="font-K2D sm:font-extrabold lg:text-[48px] sm:text-[36px] text-3xl font-bold text-white p-0">
              Explore my <span className="text-[#AC5FDA]">latest</span> Work
            </h1>
            <hr className="sm:w-60 w-40 sm:ml-6 border-0 h-[0.5px] bg-gradient-to-r from-[#3E3895] to-[#CC4CC0] mb-3"></hr>
          </div>

          {/* drop-shadow-[0px_4px_10px_#93607D] */}
        </div>

        <div className="flex py-14 md:gap-[17px] gap-10 items-center justify-center md:flex-nowrap flex-wrap ">

          <div className="xl:h-[507px] lg:h-[450px] md:h-72 h-80 xl:w-[400px] lg:w-[420px] md:w-3xs w-4xs flex">
          <video
            className="w-full h-full object-cover rounded-[10px]"
            src="/FiveFingerHand.mp4"
            ref={vidRef}
            controls
          >
          </video>
          </div>

          <div className="flex flex-col xl:gap-[17px] gap-4 w-full lg:items-start items-center justify-center">
            <img src="mahindra.jpg" className="sm:w-[719px] w-xs xl:h-[243px] lg:h-52 h-34  rounded-[10px] object-cover"></img>
            <div className="flex xl:gap-[17px] sm:flex-nowrap flex-wrap items-center justify-center gap-4">
              <div className="xl:h-[247px] h-fit  sm:w-[350px]"><img className="xl:h-[247px] lg:h-[225px] h-34  sm:w-[350px] w-xs object-cover rounded-[10px]" src="dual_encoder_project.jpg"></img></div>
              <div className="xl:h-[247px] h-fit sm:w-[351]"><img className="xl:h-[247px] lg:h-[225px] h-34 sm:w-[351px] w-xs rounded-[10px]" src="Dual_Encoder_Backless2.jpg"></img></div> 
            </div>
          </div>
          
        </div>






    </div>
  );
}

export default Work;