import { InView } from "react-intersection-observer";
import { createRef, useRef, useState } from "react";
import { cards } from "../../../../../data/services";
import { cn } from "../../../../../utils";
import { useScroll } from "../../../../../utils/motion";
import Card from ".";

export const CardParallax = () => {
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
  );
};
