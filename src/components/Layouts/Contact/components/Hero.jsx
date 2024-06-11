import { ScrollTarget } from "../../../Elements/Button";
import { Motion, MotionParallax } from "../../../Elements/Motion";
import { useMotionParallax } from "../../../../hooks/useMotionParallax";
import { MobileXs } from "../../../../utils/screen";
import { scrollTarget } from "../../../../utils/scroll";
export const Hero = () => {
  const { containerRef, translateY } = useMotionParallax(
    ["end start", "start end"],
    ["15%", "-15%"]
  );
  return (
    <section className="w-full px-2 py-20 lg:py-28 sm:px-4">
      <Motion
        className="max-w-[1440px] mx-auto h-[80dvh] relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div
          className="w-full h-full overflow-hidden rounded-[2rem] flex items-center justify-center"
          ref={containerRef}
        >
          <MotionParallax
            translateY={translateY}
            src="https://wallpapercave.com/wp/wp8314150.jpg"
            alt="heroImage"
            lazy
          />
          <h1 className="absolute leading-none text-light h1 drop-shadow-[0_2px_0_rgba(51,51,51,0.51)]">
            Get in touch
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 w-full pt-2 pr-2 sm:w-8/12 md:w-9/12 lg:w-[45%] bg-light rounded-tr-[calc(2rem_+_10px)]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="absolute left-0 w-10 -rotate-90 -top-10"
          >
            <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path>
          </svg>
          <div className="grid grid-cols-2 gap-x-2">
            <div
              className="bg-[#2A2C2D] rounded-[2rem] py-4 xs:py-8 px-4 flex items-center justify-center text-gray-300 text-lg gap-x-4 group cursor-pointer"
              onClick={() => scrollTarget("message")}
            >
              {MobileXs ? <p>Message</p> : <p>Drop us a message</p>}
              <ScrollTarget
                target="message"
                className="w-8 h-8 px-2 mt-0 border xs:w-10 xs:h-10 md:w-12 md:h-12 xs:mt-0 border-light"
                color="text-light"
              />
            </div>
            <div
              className="bg-[#E5E5E5] rounded-[2rem] py-4 xs:py-8 px-8 flex items-center justify-between text-lg gap-x-4 group cursor-pointer"
              onClick={() => scrollTarget("faq")}
            >
              {MobileXs ? <p>FAQs</p> : <p>View FAQs</p>}
              <ScrollTarget
                target="faq"
                className="w-8 h-8 px-2 mt-0 border xs:w-10 xs:h-10 md:w-12 md:h-12 xs:mt-0"
              />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="absolute bottom-0 w-10 -rotate-90 -right-10"
          >
            <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path>
          </svg>
        </div>
      </Motion>
    </section>
  );
};
