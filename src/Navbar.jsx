import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const navigationItems = [
  { text: "Home", isActive: false, path: "/" },
  { text: "Experience", isActive: false, path: "/Experience" },
  { text: "Projects", isActive: false, path: "/Projects" },
  { text: "Skills", isActive: false, path: "/Skills" },
  { text: "Education", isActive: false, path: "/Education" },
  { text: "Certification", isActive: false, path: "/Certification" },
];

const NavigationItem = ({ text, path, isActive = false }) => {
  return (
    <Link
      to={path}
      className={`self-stretch my-auto lg:text-base text-sm ${
        isActive ? "text-purple-500" : "text-white "
      } hover:text-purple-400 transition-colors`}
    >
      {text}
      {/* href={`#${text.toLowerCase()}`} */}
    </Link>
  );
};

const NavigationBar = () => {
  const [mobileopen, setmobileOpen] = useState(false);
  const mobileMenuRef = useRef(null); 

  const handleMobileopen = (event) => {
    event.stopPropagation();
    setmobileOpen(!mobileopen);
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setmobileOpen(false);
      }
    };

    if (mobileopen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [mobileopen]);


  const Mobilemenu = () => {
    return (
      <>
        <div className="grid gap-10 h-fit sm:w-1/2 w-fit border p-5 justify-items-center place-content-start absolute z-50 bg-[#281F24]" ref={mobileMenuRef} >
          <div className="flex items-center gap-5 w-full">
            <div className="text-white text-base font-K2D font-bold leading-1 flex items-center gap-2">
              Vikash Chauhan
            </div>
          </div>

          <div className="grid place-items-start gap-3">
            {navigationItems.map((item) => (
              <NavigationItem
                key={item.text}
                text={item.text}
                isActive={item.isActive}
                path={item.path}
              />
            ))}
          </div>

          <button
              className=" z-50 w-fit h-10
          bg-gradient-to-r from-[#3E3895] to-[#9747FF] rounded-full flex justify-between "
            >
              {/* Button Text */}
              <span className="text-white  w-fit font-Inter font-normal text-[12px] flex items-center px-2">
                Connect with me
              </span>

              {/* Circular Icon Container */}
            </button>

        </div>
      </>
    );
  };

  return (
    <>
      {mobileopen ? (
        <Mobilemenu />
      ) : (
        <>
          <img
            className="fixed md:flex hidden lg:w-[67.92px] w-14 lg:h-[73px] left-[17px] lg:top-[4px] top-2
    bg-contain bg-no-repeat bg-center z-50 rounded-full"
            src="Vikash.png"
            alt="User profile"
          />

          <div className="md:flex hidden flex-row fixed z-50 top-[10px] left-24 items-center justify-between">
            <nav
              className=" flex flex-row items-center xl:px-16 lg:px-14 px-10  xl:gap-12 gap-8 
        xl:w-[866px] lg:w-[800]  lg:h-[64px] h-14
         bg-gradient-to-r from-[rgba(147,96,125,0.25)] to-[rgba(0,0,0,0.25)] 
        border-[#49494D] border-[0.5px] backdrop-blur-[5px]
        rounded-full box-border"
              role="navigation"
            >
              <div className="text-white lg:font-semibold font-normal lg:text-[16px] text-xs leading-[19px] xl:w-[90.82px]">
                <img src="/vite.svg"></img>
              </div>
              {navigationItems.map((item) => (
                
                  <NavigationItem
                    key={item.text}
                    text={item.text}
                    isActive={item.isActive}
                    path={item.path}
                  />
              
              ))}
            </nav>
            <Link to="/Contact"
              className="fixed z-50 w-[190px] h-[49px] right-3
          bg-gradient-to-r from-[#3E3895] to-[#9747FF] rounded-full lg:flex hidden justify-between "
            >
              {/* Button Text */}
              <span className="text-white  w-fit font-Inter font-normal text-[13px]  leading-[22px] flex items-center px-[19px]">
                Connect with me
              </span>

              {/* Circular Icon Container */}
              <div
                className="w-[48px] h-[48px] bg-gradient-to-r from-[#EA79FF] to-[#9747FF] 
      rounded-full flex items-center justify-center justify-self-end hover:rotate-40"
              >
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
                {/* Vector Icon */}
              </div>
            </Link>
          </div>

          {/* mobile View */}

          <div
            className="flex md:hidden flex-row items-center justify-between fixed z-50 w-full
         bg-gradient-to-r from-[rgba(147,96,125,0.25)] to-[rgba(0,0,0,0.25)] 
        border-[#49494D] border-[0.5px] backdrop-blur-[5px]
        rounded-full box-border mt-1.5 px-1.5 py-1"
          >
            <div className="text-white text-base font-K2D font-bold leading-1 flex items-center gap-2">
              <img
                className="w-10  bg-contain bg-no-repeat bg-center rounded-full"
                src="Vikash.png"
                alt="User profile"
              />
              Vikash Chauhan
            </div>

            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleMobileopen}
            >
              <path
                d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z"
                fill="#FEF7FF"
              />
            </svg>
          </div>
        </>
      )}
    </>
  );
};

export default NavigationBar;
