import { Link } from "react-router-dom";
import play from "../../../assets/play.jpg";
import { Next } from "../../Elements/Button/next";
import { Image } from "../../Elements/Image";

export const Play = () => {
  return (
    <Link
      to="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=id&gl=US"
      target="_blank"
      className="h-full group w-full rounded-[2rem] overflow-hidden relative"
    >
      <Image src={play} alt="Play" lazy />
      <p className="absolute text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
        Play Now!
      </p>
      <Next />
    </Link>
  );
};
