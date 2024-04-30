import map1 from "../../../../assets/Home/Explore/map-1.jpg";
import map2 from "../../../../assets/Home/Explore/map-2.jpg";
import map3 from "../../../../assets/Home/Explore/map-3.jpg";
import { GrLinkNext } from "react-icons/gr";

import { Link } from "react-router-dom";

export const Map = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:grid-rows-2">
      <Link to="#" className="sm:row-span-2 group">
        <div className="w-full sm:h-[460px] rounded-[2rem] overflow-hidden relative">
          <img
            src={map1}
            alt="Map 1"
            className="object-cover object-center w-full h-full"
          />
          <p className="absolute text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
            Explore the World of Genshin
          </p>
          <div className="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 rounded-tl-[2rem] bg-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute right-0 w-5 rotate-180 -top-5"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
            <i className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <GrLinkNext
                size={15}
                className="transition duration-300 text-light group-hover:scale-125 group-hover:-rotate-[22.5deg]"
              />
            </i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute bottom-0 w-5 rotate-180 -left-5"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
          </div>
        </div>
      </Link>

      <Link to="#" className="group">
        <div className="w-full sm:h-[230px] rounded-[2rem] overflow-hidden relative">
          <img
            src={map2}
            alt="Map 2"
            className="object-cover object-center w-full h-full"
          />
          <p className="absolute text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
            Play, Get Your Mission, Chill in Teyvat
          </p>
          <div className="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 rounded-tl-[2rem] bg-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute right-0 w-5 rotate-180 -top-5"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
            <i className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <GrLinkNext
                size={15}
                className="transition duration-300 text-light group-hover:scale-125 group-hover:-rotate-[22.5deg]"
              />
            </i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute bottom-0 w-5 rotate-180 -left-5"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
          </div>
        </div>
      </Link>

      <Link to="#" className="sm:col-start-2 group">
        <div className="w-full sm:h-[230px] rounded-[2rem] overflow-hidden relative">
          <img
            src={map3}
            alt="Map 3"
            className="object-cover object-center w-full h-full"
          />
          <p className="absolute text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
            Connect, Create, Forge Epic Missions with Friends
          </p>
          <div className="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 rounded-tl-[2rem] bg-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute right-0 w-5 rotate-180 -top-5"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
            <i className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <GrLinkNext
                size={15}
                className="transition duration-300 text-light group-hover:scale-125 group-hover:-rotate-[22.5deg]"
              />
            </i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute bottom-0 w-5 rotate-180 -left-5"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
};
