function Message() {
  return (
    <>
      <a className="fixed  bottom-4 right-4 z-50 w-[270px] h-[57px] md:flex hidden items-center  rounded-full shadow-lg drop-shadow-[0px_4px_10px_#93607D] bg-gradient-to-r from-[#A5B4FC] to-[#EA79FF] px-0.5  py-0.5 overflow-hidden" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2etzVCKO1pVRan1Tc5jr1lBxdhKVQXpxzOXV0zr2mneqQkTPJcqaZybGDYxyuI46GUfogoN7My" target="blank">
        <div className=" bg-black hover:bg-[#3E3895] h-full w-full rounded-full flex items-center">
          <span className="text-white font-normal leading-relaxed text-[13px] px-5 font-Inter">
            Schedule a Meeting with me
          </span>
          <div className="absolute right-0 w-[57px] h-[53px] rounded-full  bg-gradient-to-r from-[#F9A2D4] via-[#C261FF] to-[#9747FF] flex items-center justify-center hover:rotate-37">
            <img src="GoogleMeet.png"></img>
          </div>
        </div>
      </a>


      <a className="fixed  bottom-4 right-4 z-50 flex md:hidden" href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2etzVCKO1pVRan1Tc5jr1lBxdhKVQXpxzOXV0zr2mneqQkTPJcqaZybGDYxyuI46GUfogoN7My" target="blank">
      <div className="w-[57px] h-[57px] rounded-full  bg-gradient-to-r from-[#F9A2D4] via-[#C261FF] to-[#9747FF] flex items-center justify-center ">
            <img src="GoogleMeet.png"></img>
          </div>
      </a>
    </>
  );
}
export default Message;
