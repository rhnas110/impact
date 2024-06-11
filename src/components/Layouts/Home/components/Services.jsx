import { Link } from "react-router-dom";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Next } from "../../../Elements/Button/next";
import { Image } from "../../../Elements/Image";
import { MotionInView } from "../../../Elements/Motion";
import { Slider } from "../../../Elements/Swiper";
import { breakpoints } from "../../../../config/swiper.config";
import { services } from "../../../../data/services";

export const Services = () => {
  return (
    <section className="w-full" id="services">
      <div className="px-2 sm:px-8 max-w-[1440px] mx-auto mb-8">
        <MotionInView
          initial={{ opacity: 0, x: "-15%" }}
          whileInView={{ opacity: 1, x: "0" }}
        >
          <h1 className="w-full leading-none h1 lg:w-[60%] py-20">
            We Play, Explore, Create Memories Dive Deep into Teyvat&#39;s
            Wonders with impact.
          </h1>
        </MotionInView>
        <MotionInView
          initial={{ opacity: 0, y: "-100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          amount={0}
        >
          <span className="px-2 py-1 border-2 border-black rounded-3xl">
            Our Services
          </span>
        </MotionInView>
      </div>

      <MotionInView
        initial={{ opacity: 0, y: "-25%" }}
        whileInView={{ opacity: 1, y: "0" }}
      >
        <Slider
          loop={true}
          grabCursor={true}
          modules={[Autoplay]}
          a11y={false}
          speed={1000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full py-4"
          breakpoints={breakpoints}
        >
          {services?.map((service, index) => {
            return (
              <SwiperSlide key={index}>
                <Link to={service.link}>
                  <div
                    className={`h-48 ${service.bg} w-80 rounded-[2rem] flex items-center justify-center relative group hover:-translate-y-2 transition duration-300`}
                  >
                    <p className="absolute top-4 left-6 font-bold text-light drop-shadow-[0_2px_0_rgba(51,51,51,1)] text-3xl">
                      {service.title}
                    </p>
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="w-1/2 h-auto transition duration-300 bg-transparent rounded-full group-hover:scale-110"
                      lazy
                    />
                    <Next />
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Slider>
      </MotionInView>
    </section>
  );
};
