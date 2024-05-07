import defaultImage from "../../../assets/Services/Hero/default.gif";
import contact from "../../../assets/Contact/furina.gif";

import { CardContact } from "../Contact/Card";
import { Hero } from "../Hero";
import Card from "./Card";
import { cn, randomIntFromInterval } from "../../../utils";
import { cards } from "../../../data/services";

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
                    ? ""
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
      {/* <div className="px-2 max-w-[1440px] mx-auto sm:py-4">
        <h3 className="w-full font-bold leading-none h3 lg:w-9/12">
          By facilitating systems innovation we believe we can generate social,
          economic and environmental outcomes that will benefit the health and
          well-being of people and the planet.
        </h3>
      </div> */}
      {/* <div className="w-full mb-36">
        <div className="px-2 sm:px-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-8 my-20 xl:gap-24 xl:flex-row">
            <span className="px-2 py-1 border-2 border-black rounded-3xl h-min w-min whitespace-nowrap">
              Why impact.
            </span>
            <div className="grid grid-cols-1 gap-8 sm:gap-3 sm:grid-cols-3">
              <div>???</div>
            </div>
          </div>
        </div>
      </div> */}

      <CardContact image={contact} className="bg-[#4F70EA]" />
    </>
  );
};
