import { Link } from "react-router-dom";
import map1 from "../../../../../assets/Home/Explore/map-1.jpg";
import map2 from "../../../../../assets/Home/Explore/map-2.jpg";
import map3 from "../../../../../assets/Home/Explore/map-3.jpg";

import { Next } from "../../../../Elements/Button/next";
import { Image } from "../../../../Elements/Image";
import { MotionInView, MotionParallax } from "../../../../Elements/Motion";
import { useMotionParallax } from "../../../../../hooks/useMotionParallax";

export const Map = () => {
  const map2Parallax = useMotionParallax(
    ["end start", "start end"],
    ["10%", "-25%"]
  );
  const map3Parallax = useMotionParallax(
    ["end start", "start end"],
    ["10%", "-25%"]
  );
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
        ref={map2Parallax.containerRef}
      >
        <MotionInView
          initial={{ opacity: 0, x: "10%" }}
          whileInView={{ opacity: 1, x: "0" }}
          amount={0}
        >
          <MotionParallax
            src={map2}
            alt="Map 2"
            lazy
            translateY={map2Parallax.translateY}
            className="h-[120%]"
          />
          <p className="absolute text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
            Play, Get Your Mission, Chill in Teyvat
          </p>
          <Next />
        </MotionInView>
      </Link>

      <Link
        to="#"
        className="sm:col-start-2 group w-full sm:h-[230px] rounded-[2rem] overflow-hidden relative"
        ref={map3Parallax.containerRef}
      >
        <MotionInView
          initial={{ opacity: 0, x: "5%" }}
          whileInView={{ opacity: 1, x: "0" }}
          amount={0}
        >
          <MotionParallax
            src={map3}
            alt="Map 3"
            lazy
            translateY={map3Parallax.translateY}
            className="h-[120%]"
          />
          <p className="absolute text-lg sm:text-xl lg:text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
            Connect, Create, Forge Epic Missions with Friends
          </p>
          <Next />
        </MotionInView>
      </Link>
    </div>
  );
};
