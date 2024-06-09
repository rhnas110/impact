import { useState } from "react";
import { Badge } from "../../../Elements/Badge";
import { MotionInView, MotionParallax } from "../../../Elements/Motion";
import { useMotionParallax } from "../../../../hooks/useMotionParallax";
import { cn } from "../../../../utils";
import { motion } from "../../../../utils/motion";
import { Mobile } from "../../../../utils/screen";

const values = [
  {
    title: "Celebrate Exploration",
    description:
      "Encourage players to discover new strategies, secrets, and adventures within the world of Genshin Impact.",
  },
  {
    title: "Foster Creativity",
    description:
      "Empower individuals to share their unique ideas, fan art, and game strategies, creating a space where creativity can flourish.",
  },
  {
    title: "Build Community",
    description:
      "Promote collaboration and collective thinking by enabling a supportive ecosystem where players benefit from shared knowledge and connections.",
  },
  {
    title: "Inspire Fun",
    description:
      "Champion a positive and engaging atmosphere where players can enjoy the game and each other's company, making every adventure memorable.",
  },
];
export const Values = () => {
  const [indexHover, setIndexHover] = useState(null);
  const [indexDesc, setIndexDesc] = useState(null);
  const { containerRef, translateY } = useMotionParallax();
  return (
    <section className="px-2 max-w-[1440px] mx-auto">
      <MotionInView
        initial={{ opacity: 0, y: "-10%" }}
        whileInView={{ opacity: 1, y: "0" }}
      >
        <Badge text="Our Values" />
      </MotionInView>
      <div className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2">
        <ul>
          {values.map(({ title, description }, index) => {
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
                      "border-none": index === values.length - 1,
                      "border-[#267E4F]": index === indexHover,
                    }
                  )}
                >
                  <span
                    className={cn(
                      "text-[#267E4F]/75 transition duration-300 opacity-0 -translate-x-2 text-2xl",
                      {
                        "opacity-100 translate-x-0": index === indexHover,
                      }
                    )}
                  >
                    •
                  </span>
                  <h3
                    className="h3 font-bold text-[#267E4F] cursor-pointer hover:text-[#267E4F]/75 -translate-x-4 transition duration-300 hover:translate-x-0"
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
              src="https://c4.wallpaperflare.com/wallpaper/433/869/249/genshin-impact-artwork-nahida-genshin-impact-anime-anime-girls-hd-wallpaper-preview.jpg"
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
                "text-light bg-[#267E4F]/40 backdrop-blur-md":
                  indexHover % 2 === 0,
                "text-[#267E4F] bg-light/40 backdrop-blur-md":
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
