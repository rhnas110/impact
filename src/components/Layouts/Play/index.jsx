import play from "../../../assets/play.jpg";
import { Link } from "react-router-dom";
import { Next } from "../../Elements/Button/next";
import { MotionParallax } from "../../Elements/Motion";
import { useMotionParallax } from "../../../hooks/useMotionParallax";
export const Play = () => {
  const { containerRef, translateY } = useMotionParallax(
    ["end start", "start end"],
    ["0%", "-30%"]
  );
  return (
    <Link
      to="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=id&gl=US"
      target="_blank"
      className="h-full w-full group rounded-[2rem] overflow-hidden"
      ref={containerRef}
    >
      <MotionParallax
        src={play}
        alt="Play"
        lazy
        translateY={translateY}
        className="h-[115%]"
      />
      <p className="absolute text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
        Play Now!
      </p>
      <Next />
    </Link>
  );
};
