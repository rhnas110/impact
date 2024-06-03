import { useRef } from "react";
import { GrLinkNext } from "react-icons/gr";

import { Next } from "../../../../Elements/Button/next";
import { Image } from "../../../../Elements/Image";
import { motion, useScroll, useTransform } from "../../../../../utils/motion";

const Card = ({ data, i, progress, range, targetScale }) => {
  const { title, description, src, link, color, bg } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container}>
      <motion.div
        className={`relative flex flex-col lg:grid lg:grid-cols-[minmax(0,35%)_minmax(0,1fr)] py-10 px-4 md:px-12 w-full md:w-[clamp(600px,100%,1200px)] lg:w-[clamp(600px,100%,1440px)] xl:w-[clamp(600px,100%,1920px)] h-[520px] rounded-[2rem] origin-top ${bg} gap-4 lg:gap-8`}
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <motion.div
          className="w-full h-full rounded-[2rem] overflow-hidden"
          style={{ scale: imageScale }}
        >
          <Image src={src} alt={title} lazy />
        </motion.div>
        <div className="flex flex-col w-full gap-6 overflow-y-scroll lg:overflow-y-hidden scrollbar-hide h-2/5 sm:h-1/2 lg:h-full">
          <h3 className="font-bold leading-none h3">{title}</h3>
          <h4 className={`font-bold leading-none h4 ${color}`}>
            {description}
          </h4>
          <>
            <a href={link} className="items-center hidden gap-2 group lg:flex">
              <p className="text-lg">Learn More</p>
              <i className="px-3 py-3 bg-black rounded-full text-light">
                <GrLinkNext
                  size={20}
                  className="group-hover:scale-110 group-hover:-rotate-[22.5deg] transition duration-300"
                />
              </i>
            </a>
            <a href={link} className="lg:hidden group">
              <Next />
            </a>
          </>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
