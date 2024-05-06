import map1 from "../../../../assets/Home/Explore/map-1.jpg";
import map2 from "../../../../assets/Home/Explore/map-2.jpg";
import map3 from "../../../../assets/Home/Explore/map-3.jpg";

import { Link } from "react-router-dom";
import { Next } from "../../../Elements/Button/next";
import { MotionInView } from "../../../Elements/Motion";
import { Image } from "../../../Elements/Image";
import { ParallaxY } from "../../../Elements/Parallax";

export const Map = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:grid-rows-2">
      <Link
        to="#"
        className="sm:row-span-2 group w-full sm:h-[460px] rounded-[2rem] overflow-hidden relative"
      >
        <MotionInView
          initial={{ opacity: 0, x: "-15%" }}
          whileInView={{ opacity: 1, x: "0" }}
          amount={0}
        >
          <Image
            src={map1}
            alt="Map 1"
            lazy
            className="transition duration-300 group-hover:scale-110"
          />
          <p className="absolute text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
            Explore the World of Genshin
          </p>
          <Next />
        </MotionInView>
      </Link>

      <Link
        to="#"
        className="group w-full sm:h-[230px] rounded-[2rem] overflow-hidden relative"
      >
        <MotionInView
          initial={{ opacity: 0, x: "10%" }}
          whileInView={{ opacity: 1, x: "0" }}
          amount={0}
        >
          <ParallaxY fromY="-60px">
            <Image
              src={map2}
              alt="Map 2"
              lazy
              className="transition duration-300 group-hover:scale-110 h-[120%]"
            />
          </ParallaxY>
          <p className="absolute text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
            Play, Get Your Mission, Chill in Teyvat
          </p>
          <Next />
        </MotionInView>
      </Link>

      <Link
        to="#"
        className="sm:col-start-2 group w-full sm:h-[230px] rounded-[2rem] overflow-hidden relative"
      >
        <MotionInView
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "0" }}
          amount={0}
        >
          <ParallaxY fromY="-50px">
            <Image
              src={map3}
              alt="Map 3"
              lazy
              className="transition duration-300 group-hover:scale-110 h-[120%]"
            />
          </ParallaxY>
          <p className="absolute text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
            Connect, Create, Forge Epic Missions with Friends
          </p>
          <Next />
        </MotionInView>
      </Link>
    </div>
  );
};
