import heroVideo from "../../../assets/Services/Hero/hero.mp4";
import contact from "../../../assets/Contact/furina.gif";

import { CardContact } from "../Contact/Card";
import { Hero } from "../Hero";

export const Services = () => {
  return (
    <>
      <section className="w-full px-2 pt-2 mb-24 sm:px-4">
        <div className="max-w-[1440px] mx-auto">
          <Hero
            video={heroVideo}
            quote="Yesterday’s experiences make me stronger today."
            scrollTarget="services"
          />
        </div>
      </section>

      <div
        className="flex items-center justify-center w-full px-2 py-16 sm:px-4"
        id="services"
      >
        <h1>I need time.</h1>
      </div>
      <div className="px-2 max-w-[1440px] mx-auto sm:py-4">
        <h3 className="w-full font-bold leading-none h3 lg:w-9/12">
          By facilitating systems innovation we believe we can generate social,
          economic and environmental outcomes that will benefit the health and
          well-being of people and the planet.
        </h3>
      </div>
      <div className="w-full mb-36">
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
      </div>

      <CardContact image={contact} />
    </>
  );
};
