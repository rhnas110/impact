import "./styles.css";
import explore1 from "../../../../assets/Home/Explore/explore-1.jpeg";
import explore2 from "../../../../assets/Home/Explore/explore-2.jpg";
import explore3 from "../../../../assets/Home/Explore/explore-3.jpg";
import explore4 from "../../../../assets/Home/Explore/explore-4.jpg";

import { Link } from "react-router-dom";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import { Map } from "./Map";
import { Slider } from "../../../Elements/Swiper";
import { Next } from "../../../Elements/Button/next";
import { MotionInView } from "../../../Elements/Motion";

import { Mobile } from "../../../../utils/screen";

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
    <section className="w-full px-2 my-24 sm:px-4">
      <div className="max-w-[1440px] max-h-min mx-auto relative flex flex-col gap-2 items-center justify-center">
        <Map />

        <div className="sm:grid w-full gap-2 sm:grid-cols-[minmax(0,60%)_minmax(0,1fr)] lg:grid-cols-[minmax(0,70%)_minmax(0,1fr)]">
          <div className="w-full h-[clamp(300px,560px)] rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden">
            <MotionInView
              initial={{ opacity: 0, x: Mobile ? "0" : "-15%" }}
              whileInView={{ opacity: 1, x: "0" }}
              amount={0}
            >
              <img
                src={image}
                alt="Explore Image"
                className="object-cover object-center w-full h-full image-animate"
                loading="lazy"
              />
            </MotionInView>
          </div>

          <MotionInView
            initial={{ opacity: 0, x: Mobile ? "0" : "10%" }}
            whileInView={{ opacity: 1, x: "0" }}
            className="w-full min-h-[250px]"
            amount={0}
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
              onSlideChangeTransitionEnd={function (swipe) {
                setActiveIndex(swipe.realIndex);
              }}
              className="h-full relative w-full rounded-b-[2rem] sm:rounded-[2rem] overflow-hidden bg-[#A8C3F2] sm:bg-[#EAF1FC]"
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

              <Link to="#" className="absolute bottom-0 right-0 z-10 group">
                <Next />
              </Link>
            </Slider>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};
