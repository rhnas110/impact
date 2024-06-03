import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "../../../utils/motion";
import { Mobile } from "../../../utils/screen";
import { scrollTo } from "../../../utils/scroll";
import { Next } from "../../Elements/Button/next";
import { MotionInView } from "../../Elements/Motion";

export const Contact = () => {
  const imageContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ["end start", "start end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);
  return (
    <section className="w-full px-2 sm:px-4">
      <div className="max-w-[1440px] max-h-min mx-auto grid gap-4 sm:grid-cols-[minmax(0,55%)_minmax(0,1fr)]">
        <div
          className="aspect-video w-full sm:min-h-[300px] sm:h-[480px] rounded-[2rem] overflow-hidden"
          ref={imageContainerRef}
        >
          <MotionInView
            initial={{ opacity: 0, x: Mobile ? "0" : "-15%" }}
            whileInView={{ opacity: 1, x: "0" }}
            className="overflow-hidden"
          >
            <motion.img
              src="https://wallpapers.com/images/high/genshin-impact-klee-with-red-eyes-oj2s4m2nzkojm392.webp"
              alt="Contact"
              style={{ translateY: translateY }}
              className="object-cover object-center w-full h-[110%]"
            />
          </MotionInView>
        </div>
        <MotionInView
          initial={{ opacity: 0, x: Mobile ? "0" : "15%" }}
          whileInView={{ opacity: 1, x: "0" }}
          className="overflow-hidden"
        >
          <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#692B0E] px-6 pt-6 pb-12 md:p-8 text-light">
            <h3 className="font-bold leading-none h3">Join impact.</h3>
            <p className="py-4 leading-none lg:text-lg lg:leading-tight lg:w-10/12">
              We invite you to join our vibrant Genshin Impact community.
              Connect with fellow adventurers, share your discoveries, and be
              part of a journey filled with epic quests and new friendships.
              Let&#39;s explore the world of Teyvat together!
            </p>
            <Link
              to="/services"
              className="group"
              onClick={() => scrollTo(0, 0)}
            >
              <Next />
            </Link>
          </div>
        </MotionInView>
      </div>
    </section>
  );
};
