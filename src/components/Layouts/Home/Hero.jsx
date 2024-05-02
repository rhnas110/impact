import heroVideo from "../../../assets/Home/Hero/hero.mp4";
import emote from "../../../assets/Emote/yae-miko-emote.png";
import play from "../../../assets/play.jpg";

import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./hero.css";

import Counter from "../../Elements/Counter";
import { Mobile } from "../../../utils/screen";

export const Hero = () => {
  return (
    <div className="w-full px-2 pt-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto grid gap-4 sm:grid-cols-[minmax(100px,_1fr)_260px] grid-cols-1">
        <div className="w-full h-[95dvh] relative">
          <div className="w-full h-full overflow-hidden rounded-[2rem] bg-neutral-950">
            <video
              id="heroVideo"
              autoPlay
              muted
              loop
              playsInline
              className="object-cover object-center w-full h-full"
            >
              <source src={heroVideo} type="video/mp4" />
            </video>
          </div>
          <div className="absolute bottom-0 left-0 w-[80%] sm:pt-8 sm:pr-8 pt-4 sm:w-9/12 lg:w-1/2 bg-light rounded-tr-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute left-0 w-10 -rotate-90 -top-10"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
            <h1 className="leading-none text-left home-hero-title">
              I need your actions, not your words.
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute bottom-0 w-10 -rotate-90 -right-10"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
            <button className="items-center justify-center hidden mt-8 border border-black rounded-full w-14 h-14 group sm:flex">
              <GrLinkNext
                size={20}
                className="text-black transition duration-300 rotate-90 group-hover:scale-125"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full sm:h-[95dvh] gap-2">
          <Swiper
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
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <Link
            to="https://play.google.com/store/apps/details?id=com.miHoYo.GenshinImpact&hl=id&gl=US"
            target="_blank"
            className="group"
          >
            <div className="w-full h-48 rounded-[2rem] overflow-hidden relative">
              <img
                src={play}
                alt="Play"
                className="object-cover object-center w-full h-full"
              />
              <p className="absolute text-2xl font-bold drop-shadow-[0_2px_0_rgba(51,51,51,1)] top-4 left-4 text-light">
                Play Now!
              </p>
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

          <div className="w-full h-60 rounded-[2rem] overflow-hidden relative bg-[#32C58B]">
            {/* <p>---</p> */}
            <Swiper
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
              className="h-full relative w-full rounded-b-[2rem] sm:rounded-[2rem] overflow-hidden p-4"
            >
              <SwiperSlide>
                <h5 className="[font-size:clamp(1.313rem,1.17rem_+_.45vw,1.625rem)] font-bold leading-[1.2]">
                  <span className="text-[#d9db4d]">Explore</span> the World of
                  Genshin
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <h5 className="[font-size:clamp(1.313rem,1.17rem_+_.45vw,1.625rem)] font-bold leading-[1.2]">
                  Chill with Friends, Make an{" "}
                  <span className="text-[#d9db4d]">impact.</span>
                </h5>
              </SwiperSlide>
              <SwiperSlide>
                <h5 className="[font-size:clamp(1.313rem,1.17rem_+_.45vw,1.625rem)] font-bold leading-[1.2]">
                  A lovely community{" "}
                  <span className="text-[#d9db4d]">impact.</span> Play with{" "}
                  <span className="text-[#d9db4d]">impact.</span>
                </h5>
              </SwiperSlide>
              <Link to="#" className="absolute bottom-0 right-0 z-10 group">
                <div className="relative flex items-center justify-center w-16 h-16 rounded-tl-[2rem] bg-light">
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
              </Link>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
