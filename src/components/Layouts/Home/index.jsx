import emote from "../../../assets/Emote/yae-miko-emote.png";

import { Link } from "react-router-dom";
// import required modules
import { SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css/pagination";
import "./styles.css";

import { Mobile } from "../../../utils/screen";
import Counter from "../../Elements/Counter";
import { Slider } from "../../Elements/Swiper";
import { Next } from "../../Elements/Button/next";
import { MotionInView } from "../../Elements/Motion";

import { Hero } from "../Hero";
import { Play } from "../Play";
import { Services } from "./Services";
import { Principles } from "./Principles";
import { Explore } from "./Explore";
import { Community } from "./Community";
import { CardContact } from "../Contact/Card";

export const Home = () => {
  return (
    <>
      <section className="w-full px-2 pt-2 mb-16 sm:px-4">
        <div className="max-w-[1440px] mx-auto grid gap-4 sm:grid-cols-[minmax(100px,_1fr)_260px] grid-cols-1">
          <Hero />

          <div className="grid grid-rows-[minmax(200px,auto)_minmax(200px,1fr)_minmax(0,1fr)] w-full sm:h-[95dvh] gap-2">
            <MotionInView
              initial={{ opacity: 0, x: "10%" }}
              whileInView={{ opacity: 1, x: "0" }}
            >
              <Slider
                direction={`${Mobile ? "vertical" : "horizontal"}`}
                pagination={{
                  clickable: true,
                  type: "bullets",
                }}
                modules={[Pagination, Autoplay]}
                className="w-full sm:w-64 h-64 bg-[#E99988] rounded-[2rem] sm:rounded-full overflow-hidden"
                allowTouchMove={false}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
              >
                <SwiperSlide className="flex flex-col items-center justify-center w-full h-full">
                  <Counter
                    target={100}
                    title="Total Download"
                    prefix="M+"
                    duration={1}
                  />
                </SwiperSlide>
                <SwiperSlide className="flex flex-col items-center justify-center w-full h-full">
                  <Counter
                    target={40}
                    title="Waifu"
                    duration={2}
                    className="font-bold"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex flex-col items-center justify-center w-full h-full">
                  <div className="w-52">
                    <img
                      src={emote}
                      alt="Yae Miko Emote"
                      className="object-cover object-center w-full h-full"
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              </Slider>
            </MotionInView>

            <MotionInView
              initial={{ opacity: 0, x: "12.5%" }}
              whileInView={{ opacity: 1, x: "0" }}
              className="rounded-[2rem] overflow-hidden"
            >
              <Play />
            </MotionInView>
            <MotionInView
              initial={{ opacity: 0, x: "15%" }}
              whileInView={{ opacity: 1, x: "0" }}
              className="overflow-hidden"
            >
              <Slider
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 2,
                }}
                modules={[Pagination, Autoplay]}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                spaceBetween={40}
                a11y={false}
                speed={1000}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="rounded-b-[2rem] sm:rounded-[2rem] p-4 w-full h-full rounded-[2rem] overflow-hidden relative bg-[#32C58B]"
              >
                <SwiperSlide>
                  <h5 className="h5 font-bold leading-[1.2]">
                    <span className="text-[#d9db4d]">Explore</span> the World of
                    Genshin
                  </h5>
                </SwiperSlide>
                <SwiperSlide>
                  <h5 className="h5 font-bold leading-[1.2]">
                    Chill with Friends, Make an{" "}
                    <span className="text-[#d9db4d]">impact.</span>
                  </h5>
                </SwiperSlide>
                <SwiperSlide>
                  <h5 className="h5 font-bold leading-[1.2]">
                    A lovely community{" "}
                    <span className="text-[#d9db4d]">impact.</span> Play with{" "}
                    <span className="text-[#d9db4d]">impact.</span>
                  </h5>
                </SwiperSlide>
                <Link to="#" className="absolute bottom-0 right-0 z-10 group">
                  <Next />
                </Link>
              </Slider>
            </MotionInView>
          </div>
        </div>
      </section>

      <Services />
      <Principles />
      <Explore />
      <Community />
      <CardContact />
    </>
  );
};
