// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

import { services } from "../../../data/services";

export const Services = () => {
  return (
    <div className="w-full">
      <div className="px-2 sm:px-8 max-w-[1440px] mx-auto py-20">
        <p className="w-full leading-none home-hero-title lg:w-[60%]">
          We Play, Explore, Create Memories Dive Deep into Teyvat&#39;s Wonders
          with impact.
        </p>
      </div>
      <div className="px-2 sm:px-8 max-w-[1440px] mx-auto mb-8">
        <span className="px-2 py-1 border-2 border-black rounded-3xl">
          Our Services
        </span>
      </div>

      <Swiper
        // freeMode={true}
        loop={true}
        loopedSlides={4}
        grabCursor={true}
        modules={[Autoplay]}
        spaceBetween={0}
        a11y={false}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full py-4"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          374: {
            slidesPerView: 1.1,
            // spaceBetween: 5,
          },
          480: {
            slidesPerView: 2,
            // spaceBetween: 10,
          },
          767: {
            slidesPerView: 2.25,
            // spaceBetween: 15,
          },
          992: {
            slidesPerView: 3,
            // spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4.5,
            // spaceBetween: 40,
          },
        }}
      >
        {services?.map((service, index) => {
          return (
            <SwiperSlide key={index}>
              <Link>
                <div
                  className={`h-48 ${service.bg} w-80 rounded-[2rem] flex items-center justify-center relative group hover:-translate-y-2 transition duration-300`}
                >
                  <p className="absolute top-4 left-6 font-bold text-light drop-shadow-[0_2px_0_rgba(51,51,51,1)] text-3xl">
                    {service.title}
                  </p>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover object-center w-1/2 transition duration-300 rounded-full group-hover:scale-110"
                  />
                  {/* <p className="absolute text-lg bottom-2 right-20 text-light">
                    Learn More
                  </p> */}

                  <div className="absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 rounded-tl-[2rem] bg-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      className="absolute right-0 w-5 rotate-180 -top-5"
                    >
                      <path
                        d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                        fill="#F9F8F6"
                      ></path>
                    </svg>
                    <i className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
                      <GrLinkNext
                        size={15}
                        className="transition duration-300 text-light group-hover:scale-125 group-hover:-rotate-[22.5deg]"
                      />
                    </i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 100"
                      className="absolute bottom-0 w-5 rotate-180 -left-5"
                    >
                      <path
                        d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                        fill="#F9F8F6"
                      ></path>
                    </svg>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
