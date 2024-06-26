import com1 from "../../../../assets/Community/com-1.jpg";
import com2 from "../../../../assets/Community/com-2.jpg";
import com3 from "../../../../assets/Community/com-3.jpg";
import { Link } from "react-router-dom";

import { Next } from "../../../Elements/Button/next";
import { MotionImage, MotionInView } from "../../../Elements/Motion";

const community = [
  {
    image: com1,
    category: "Chill",
    bgCategory: "bg-[#32C58B]",
    title: "Genshin Impact's Kawaii Queens: Adorable Female Characters",
    desc: "Discover the radiant beauty of Genshin Impact's female characters, whose loveliness knows no bounds. From the cute and charming to the elegant and graceful, they bloom like roses in Teyvat's landscape.",
  },
  {
    image: com2,
    category: "Mission",
    bgCategory: "bg-[#B1653B]",
    title: "Teyvat Wanderers Union",
    desc: "A welcoming space for Genshin Impact fans. Discuss updates, theories, and lore. Join events and make lasting friendships here!",
  },
  {
    image: com3,
    category: "Play",
    bgCategory: "bg-[#77A3AB]",
    title: "Genshin Impact - Cinematic Experience",
    desc: "With its stunning visuals, captivating soundtrack, and epic cutscenes, Genshin Impact offers players a cinematic gaming experience like no other.",
  },
];
export const Community = () => {
  return (
    <section className="w-full">
      <div className="px-2 sm:px-8 max-w-[1440px] mx-auto sm:py-12">
        <MotionInView
          initial={{ opacity: 0, x: "-15%" }}
          whileInView={{ opacity: 1, x: "0" }}
        >
          <h1 className="w-full leading-none h1 lg:w-9/12 xl:w-[60%]">
            A lovely community, exploring Genshin Impact with love and impact.
          </h1>
        </MotionInView>

        <div className="flex flex-col gap-8 my-12 xl:my-24 xl:gap-24 xl:flex-row">
          <MotionInView
            initial={{ opacity: 0, x: "-30%" }}
            whileInView={{ opacity: 1, x: "0" }}
          >
            <span className="px-2 py-1 border-2 border-black rounded-3xl h-min w-min">
              Community
            </span>
          </MotionInView>

          <div className="grid grid-cols-1 gap-8 md:gap-3 md:grid-cols-3">
            {community.map((item, index) => {
              return (
                <Link
                  to="/community"
                  target="_blank"
                  key={index}
                  className="transition duration-300 group hover:-translate-y-2"
                >
                  <MotionInView
                    initial={{ opacity: 0, y: "-5%" }}
                    whileInView={{ opacity: 1, y: "0" }}
                    className="flex flex-col gap-4"
                  >
                    <div className="xl:aspect-square aspect-[3/2] overflow-hidden rounded-[2rem] relative">
                      <span
                        className={`absolute py-1 px-2 ${item.bgCategory} rounded-3xl h-min top-4 left-4 z-[1]`}
                      >
                        {item.category}
                      </span>
                      <MotionImage
                        src={item.image}
                        alt={item.title}
                        lazy
                        initial={{
                          opacity: 0,
                          filter: "blur(2rem)",
                        }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        className="transition duration-300 group-hover:scale-110"
                      />
                      <Next />
                    </div>
                    <p className="text-xl font-bold sm:text-3xl">
                      {item.title}
                    </p>
                    <p className="sm:text-lg sm:leading-tight">{item.desc}</p>
                  </MotionInView>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
