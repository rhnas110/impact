import defaultImage from "../../../../assets/Services/Hero/default.gif";
import { Hero as HeroLayout } from "../../Hero";
import { randomIntFromInterval } from "../../../../utils";

const src = [defaultImage, ""];
export const Hero = () => {
  return (
    <section className="w-full px-2 pt-2 mb-8 sm:px-4">
      <div className="max-w-[1440px] mx-auto">
        <HeroLayout
          type={1}
          image={src[randomIntFromInterval(0, src.length - 1)]}
          quote="Yesterday’s experiences make me stronger today."
          scrollTarget="services"
        />
      </div>
    </section>
  );
};
