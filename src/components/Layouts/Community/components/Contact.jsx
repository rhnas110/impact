import { Link } from "react-router-dom";
import { Next } from "../../../Elements/Button/next";
import { MotionInView, MotionParallax } from "../../../Elements/Motion";
import { useMotionParallax } from "../../../../hooks/useMotionParallax";
import { Mobile } from "../../../../utils/screen";
import { scrollTo } from "../../../../utils/scroll";
export const Contact = () => {
  const { containerRef, translateY } = useMotionParallax(
    ["end start", "start end"],
    ["5%", "-15%"]
  );
  return (
    <section className="w-full px-2 sm:px-4">
      <div className="max-w-[1440px] max-h-min mx-auto grid gap-4 sm:grid-cols-[minmax(0,55%)_minmax(0,1fr)]">
        <div
          className="aspect-video w-full sm:min-h-[300px] sm:h-[480px] rounded-[2rem] overflow-hidden"
          ref={containerRef}
        >
          <MotionInView
            initial={{ opacity: 0, x: Mobile ? "0" : "-15%" }}
            whileInView={{ opacity: 1, x: "0" }}
            className="overflow-hidden"
          >
            <MotionParallax
              src="https://genshindb.org/wp-content/uploads/2022/10/Lumine-sumeru-walk-wood-event-genshin-official-wallpaper-5.jpg"
              alt="Contact"
              lazy
              translateY={translateY}
            />
          </MotionInView>
        </div>
        <MotionInView
          initial={{ opacity: 0, x: Mobile ? "0" : "15%" }}
          whileInView={{ opacity: 1, x: "0" }}
          className="overflow-hidden"
        >
          <div className="w-full h-full rounded-[2rem] min-h-[220px] overflow-hidden bg-[#99B38E] px-6 pt-6 pb-12 md:p-8 text-light">
            <h4 className="font-bold leading-none h4">
              Sound like you? <br />
              Get in touch
            </h4>
            <div className="absolute bottom-0 left-0 w-full group">
              <Link to="/contact" onClick={() => scrollTo(0, 0)}>
                <span className="absolute text-lg md:text-xl bottom-2 right-20">
                  Get in touch
                </span>
                <Next />
              </Link>
            </div>
          </div>
        </MotionInView>
      </div>
    </section>
  );
};
