import com1 from "../../../assets/Home/Community/com-1.jpg";
import com2 from "../../../assets/Home/Community/com-2.jpg";
import com3 from "../../../assets/Home/Community/com-3.jpg";

import { Link } from "react-router-dom";
import { Next } from "../../Elements/Button/next";
import { MotionInView } from "../../Elements/Motion";
import { motion } from "../../../utils/motion";
import { transition } from "../../../config/transition.config";

const community = [
  {
    image: com1,
    category: "Chill",
    bgCategory: "bg-[#32C58B]",
    title: "What are the 3 Horizons of Transformative Innovation?",
    desc: "Three Horizons thinking is a useful method for making sense of and facilitating transformative innovation.",
  },
  {
    image: com2,
    category: "Misson",
    bgCategory: "bg-[#B1653B]",
    title: "Living Systems Thinking: Exploring the Integral Patterns of Life",
    desc: "At the cutting edge of science, a new way of making sense of the world is beginning to emerge. One that moves from parts to wholes, from quantities to qualities, from measuring to mapping from absolute certainty to approximate knowledge.",
  },
  {
    image: com3,
    category: "Play",
    bgCategory: "bg-[#77A3AB]",
    title: "Why We Need to Rethink Our Worldview",
    desc: "In today's rapidly changing world, our dominant worldview is being challenged by the complexities and interconnectedness of global issues.",
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
          <p className="w-full leading-none h1 lg:w-9/12 xl:w-[60%]">
            A lovely community, exploring Genshin Impact with love and impact.
          </p>
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

          <div className="grid grid-cols-1 gap-8 sm:gap-3 sm:grid-cols-3">
            {community.map((item, index) => {
              return (
                <Link
                  className="flex flex-col gap-4 transition duration-300 group hover:-translate-y-2"
                  to="#"
                  key={index}
                >
                  <MotionInView
                    initial={{ opacity: 0, y: "-5%" }}
                    whileInView={{ opacity: 1, y: "0" }}
                  >
                    <div className="xl:aspect-square aspect-[3/2] overflow-hidden rounded-[2rem] relative">
                      <span
                        className={`absolute py-1 px-2 ${item.bgCategory} rounded-3xl h-min top-4 left-4 z-[1]`}
                      >
                        {item.category}
                      </span>
                      <motion.img
                        initial={{
                          opacity: 0,
                          filter: "blur(2rem)",
                        }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={transition}
                        src={item.image}
                        alt={item.title}
                        className="object-cover object-center w-full h-full transition duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <Next />
                    </div>
                    <p className="text-xl font-bold sm:text-3xl">
                      {item.title}
                    </p>
                    <p className="sm:text-lg">{item.desc}</p>
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
