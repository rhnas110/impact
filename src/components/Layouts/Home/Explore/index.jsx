import explore1 from "../../../../assets/Home/Explore/explore-1.jpeg";
import explore2 from "../../../../assets/Home/Explore/explore-2.jpg";
import explore3 from "../../../../assets/Home/Explore/explore-3.jpg";
import explore4 from "../../../../assets/Home/Explore/explore-4.jpg";
import "./styles.css";

import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { Map } from "./Map";

const explore = [
  {
    image: explore1,
    category: "Waifu",
    title: "🖤",
    desc: "可愛い",
  },
  {
    image: explore2,
    category: "Play",
    title: "Embark on Adventure: Genshin Awaits",
    desc: "Immerse yourself in a vast world of wonders, where every corner holds new mysteries and adventures to uncover.",
  },
  {
    image: explore3,
    category: "Mission",
    title: "Unravel Epic Quests",
    desc: "Embark on thrilling missions in Genshin Impact, where challenges await and adventures unfold with every step.",
  },
  {
    image: explore4,
    category: "Chill",
    title: "Chill with Friends, Make an Impact",
    desc: "Join our vibrant community in Genshin Impact for relaxed adventures and meaningful connections.",
  },
];
export const Explore = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const image = explore[activeIndex]?.image;
  return (
    <div className="w-full px-2 my-24 sm:px-4">
      <div className="max-w-[1440px] max-h-min mx-auto relative flex flex-col gap-2 items-center justify-center">
        <Map />

        <div className="sm:grid w-full gap-2 sm:grid-cols-[minmax(0,60%)_minmax(0,1fr)] lg:grid-cols-[minmax(0,70%)_minmax(0,1fr)]">
          <div className="w-full h-[clamp(300px,560px)] rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden">
            <img
              src={image}
              alt="Explore Image"
              className="object-cover object-center w-full h-full image-animate"
              loading="lazy"
            />
          </div>

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
            onSlideChangeTransitionEnd={function (swipe) {
              setActiveIndex(swipe.realIndex);
              //   console.log(swipe.realIndex, "REAL INDEX");
            }}
            className="min-h-[250px] relative w-full rounded-b-[2rem] sm:rounded-[2rem] overflow-hidden bg-[#A8C3F2] sm:bg-[#EAF1FC]"
          >
            {explore.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col gap-3 px-4 py-4 sm:px-8 sm:pt-8 sm:gap-6"
              >
                <p className="px-4 py-1 border-2 border-black w-min rounded-3xl">
                  {item.category}
                </p>
                <p className="text-xl font-bold sm:text-3xl">{item.title}</p>
                <p className="sm:text-lg">{item.desc}</p>
              </SwiperSlide>
            ))}
            {/* <p className="absolute hidden text-lg bottom-5 right-20 sm:block">
              Read More
            </p> */}
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
  );
};
