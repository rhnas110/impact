import { useState } from "react";
import { Badge } from "../../../Elements/Badge";
import { MotionInView, MotionParallax } from "../../../Elements/Motion";
import { useMotionParallax } from "../../../../hooks/useMotionParallax";
import { cn } from "../../../../utils";
import { motion } from "../../../../utils/motion";
import { Mobile } from "../../../../utils/screen";

const principles = [
  {
    title: "Adventure and Exploration",
    description:
      "We embrace the spirit of adventure and exploration, encouraging our community to discover new strategies, secrets, and areas within the Genshin Impact universe.",
  },
  {
    title: "Teamwork and Collaboration",
    description:
      "We believe that collaboration is key to overcoming challenges. By working together and sharing knowledge, we enhance our collective gameplay experience.",
  },
  {
    title: "Inclusivity and Community",
    description:
      "We are committed to fostering a welcoming and inclusive environment for all players. Every traveler is valued, and diversity strengthens our community.",
  },
  {
    title: "Learning and Growth",
    description:
      "We strive to provide resources and support to help players improve their skills, understand game mechanics, and achieve their goals in Genshin Impact.",
  },
  {
    title: "Fun and Engagement",
    description:
      "We believe that gaming should be fun and engaging. We promote activities and events that keep the community excited and passionate about the game.",
  },
];
export const Principles = () => {
  const [indexHover, setIndexHover] = useState(null);
  const [indexDesc, setIndexDesc] = useState(null);
  const { containerRef, translateY } = useMotionParallax();
  return (
    <section className="px-2 max-w-[1440px] mx-auto mb-4 lg:mb-8">
      <MotionInView
        initial={{ opacity: 0, y: "-10%" }}
        whileInView={{ opacity: 1, y: "0" }}
      >
        <Badge text="Our Guiding Principles" />
      </MotionInView>
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
        <ul>
          {principles.map(({ title, description }, index) => {
            return (
              <MotionInView
                key={title}
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0" }}
                className="h-min"
              >
                <li
                  className={cn(
                    "py-4 border-b transition duration-300 flex gap-x-2 items-center",
                    {
                      "border-none": index === principles.length - 1,
                      "border-[#991111]": index === indexHover,
                    }
                  )}
                >
                  <span
                    className={cn(
                      "text-[#991111]/75 transition duration-300 opacity-0 -translate-x-2 text-2xl",
                      {
                        "opacity-100 translate-x-0": index === indexHover,
                      }
                    )}
                  >
                    •
                  </span>
                  <h3
                    className="h3 font-bold text-[#991111] cursor-pointer hover:text-[#991111]/75 -translate-x-4 transition duration-300 hover:translate-x-0"
                    onMouseOver={() => {
                      setIndexHover(index);
                      setIndexDesc(description);
                    }}
                    onMouseLeave={() => {
                      setIndexHover(null);
                      setIndexDesc(null);
                    }}
                  >
                    {title}
                  </h3>
                </li>
              </MotionInView>
            );
          })}
        </ul>
        <div className="relative flex justify-center lg:justify-end">
          <motion.div
            className="rounded-[2rem] lg:w-3/4 overflow-hidden md:aspect-[3/1] sm:aspect-[2/1] aspect-[2/1.5] w-full"
            ref={containerRef}
            initial={{ opacity: 0, x: Mobile ? "0" : "10%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <MotionParallax
              src="https://c4.wallpaperflare.com/wallpaper/680/583/609/hu-tao-genshin-impact-genshin-impact-anime-anime-girls-red-eyes-hd-wallpaper-preview.jpg"
              alt="principles"
              lazy
              translateY={translateY}
            />
          </motion.div>
          <div
            className={cn(
              "absolute rounded-[2rem] w-full lg:w-3/4 lg:overflow-hidden overflow-y-auto top-0 right-0 h-full opacity-0 p-3.5 sm:p-7 transition duration-500",
              {
                "opacity-100": indexDesc,
                "text-light bg-[#991111]/50 backdrop-blur-lg":
                  indexHover % 2 === 0,
                "text-[#991111] bg-light/50 backdrop-blur-lg":
                  indexHover % 2 === 1,
              }
            )}
          >
            <h4
              className={cn("font-bold", {
                "h4 leading-none": !Mobile,
                "text-lg leading-none": Mobile,
              })}
            >
              {indexDesc}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
