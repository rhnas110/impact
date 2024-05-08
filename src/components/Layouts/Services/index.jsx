import defaultImage from "../../../assets/Services/Hero/default.gif";
import contact from "../../../assets/Contact/furina.gif";

import { CardContact } from "../Contact/Card";
import { Hero } from "../Hero";
import Card from "./Card";
import { MotionInView } from "../../Elements/Motion";
import { Image } from "../../Elements/Image";
import { cn, randomIntFromInterval } from "../../../utils";
import { cards, why } from "../../../data/services";

import { createRef, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import { InView } from "react-intersection-observer";

const src = [defaultImage, ""];
export const Services = () => {
  const [activeCard, setActiveCard] = useState(1); // default card id is 1
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const refs = cards.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});
  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  return (
    <>
      <section className="w-full px-2 pt-2 mb-8 sm:px-4">
        <div className="max-w-[1440px] mx-auto">
          <Hero
            type={1}
            image={src[randomIntFromInterval(0, src.length - 1)]}
            quote="Yesterday’s experiences make me stronger today."
            scrollTarget="services"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center w-full gap-8 px-2 py-8 sm:px-4 sm:gap-4">
        <div
          className={cn(
            "transition duration-500 relative top-0 flex items-center w-full gap-4 overflow-x-scroll sm:justify-center lg:w-7/12 lg:overscroll-x-none whitespace-nowrap lg:whitespace-normal scroll-smooth scrollbar-hide",
            activeCard === cards.length
              ? ""
              : "sticky translate-y-16 sm:translate-y-24 z-[1]"
          )}
          id="services"
        >
          {cards.map(({ category, bg, border, id }) => {
            return (
              <p
                key={id}
                className={cn(
                  `transition duration-500 py-2 sm:py-4 sm:px-8 px-4 rounded-full text-center cursor-pointer font-bold ${border} border-2`,
                  activeCard === id && `${bg} border-none`
                )}
                onClick={() => handleClick(id)}
              >
                {category}
              </p>
            );
          })}
        </div>
        <div ref={container} className="max-w-[1440px] mx-auto">
          {cards.map((card, i) => {
            const targetScale = 1 - (cards.length - i) * 0.05;
            return (
              <div
                key={i}
                ref={refs[card.id]}
                className={cn(
                  "sticky top-0 flex items-center justify-center h-[75dvh] md:h-[75dvh] lg:h-[90dvh] transition duration-500",
                  activeCard === cards.length
                    ? "h-[90dvh]"
                    : "translate-y-40 sm:translate-y-32 lg:translate-y-40 xl:translate-y-36"
                )}
              >
                <InView
                  as="div"
                  threshold={0.5}
                  onChange={(inView) => {
                    if (inView) {
                      setActiveCard(card.id);
                    }
                  }}
                >
                  {({ ref }) => {
                    return (
                      <div ref={ref}>
                        <Card
                          data={card}
                          i={i}
                          progress={scrollYProgress}
                          range={[i * 0.25, 1]}
                          targetScale={targetScale}
                        />
                      </div>
                    );
                  }}
                </InView>
              </div>
            );
          })}
        </div>
      </section>
      <section className="px-2 max-w-[1440px] mx-auto py-8">
        <MotionInView
          initial={{ opacity: 0, x: "-15%" }}
          whileInView={{ opacity: 1, x: "0" }}
        >
          <h3 className="w-full font-bold leading-none h3 lg:w-9/12">
            Experience the thrilling journey through the Genshin Impact
            immersive universe, where you can chill, connect with friends, and
            leave a lasting{" "}
            <span className="text-[#D9DC4E] drop-shadow-[0_2px_0_rgba(51,51,51,1)]">
              impact.
            </span>
          </h3>
        </MotionInView>
      </section>
      <section className="w-full">
        <div className="px-2 sm:px-8 max-w-[1440px] mx-auto py-12">
          <div className="flex flex-col gap-8 xl:gap-24 xl:flex-row">
            <MotionInView
              initial={{ opacity: 0, x: "-30%" }}
              whileInView={{ opacity: 1, x: "0" }}
            >
              <span className="px-2 py-1 border-2 border-black rounded-3xl h-min w-min whitespace-nowrap">
                Why impact.
              </span>
            </MotionInView>
            <div className="grid grid-cols-1 gap-8 md:gap-3 md:grid-cols-3">
              {why.map(({ id, title, desc, icon, bg, el, renderEl }) => {
                return (
                  <MotionInView
                    initial={{ opacity: 0, y: "-5%" }}
                    whileInView={{ opacity: 1, y: "0" }}
                    key={id}
                    className="flex"
                  >
                    <div className="flex flex-col justify-between gap-8 p-4 overflow-hidden bg-white border shadow-lg rounded-xl">
                      <div className="flex flex-col gap-4">
                        <h4 className="font-bold leading-none h4">{title}</h4>
                        <h5 className="leading-none h5">{desc}</h5>
                      </div>
                      <div
                        className={`${bg} w-12 md:w-16 overflow-hidden rounded-full aspect-square`}
                      >
                        {el ? (
                          renderEl
                        ) : (
                          <Image src={icon} alt={"icon-" + id} lazy />
                        )}
                      </div>
                    </div>
                  </MotionInView>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <CardContact image={contact} className="bg-[#4F70EA]" />
    </>
  );
};
