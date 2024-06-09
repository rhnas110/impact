import { MotionInView } from "../../Elements/Motion";
import { Hero } from "./components/Hero";
import { Heading } from "./components/Heading";
import { VSMS } from "./components/VSMS";
import { Values } from "./components/Values";
import { Founders } from "./components/Founders";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
export const About = () => {
  return (
    <>
      <Hero />
      <Heading />
      <VSMS />
      <Values />
      <section className="px-2 max-w-[1440px] mx-auto my-20">
        <MotionInView
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: "0" }}
        >
          <h2 className="w-full leading-none sm:px-8 h2 lg:w-8/12">
            Weaving Adventure, Community, and Fun into a Thriving Ecosystem
          </h2>
        </MotionInView>
      </section>
      <Founders />
      <Partners />
      <Contact />
    </>
  );
};
