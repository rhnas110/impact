import { Hero } from "../Hero";
import { Principles } from "./Principles";
import { Contact } from "./Contact";
import { MotionInView } from "../../Elements/Motion";
import { transition } from "../../../config/transition.config";

export const OurPrinciples = () => {
  return (
    <>
      <section className="w-full px-2 pt-2 sm:px-4">
        <div className="max-w-[1440px] mx-auto">
          <Hero
            type={1}
            image={
              "https://media1.tenor.com/m/2h5AqdpGfi0AAAAC/arlecchino-genshin-impact.gif"
            }
            quote="Explore. Collaborate. Impact."
            scrollTarget="our-principles"
          />
        </div>
      </section>

      <section
        className="px-2 max-w-[1440px] mx-auto my-24 lg:my-32 flex flex-col"
        id="our-principles"
      >
        <MotionInView
          initial={{ opacity: 0, y: "-20%" }}
          whileInView={{ opacity: 1, y: "0" }}
        >
          <h3 className="w-full font-bold leading-none h3 lg:w-7/12">
            We’re dedicated to empowering the adventurers, strategists, and{" "}
            <span className="text-[#aa2000] drop-shadow-[0_2px_0_rgba(51,51,51,1)]">
              impact-makers
            </span>{" "}
            of the Genshin Impact community.
          </h3>
        </MotionInView>
        <MotionInView
          initial={{ opacity: 0, y: "-25%" }}
          whileInView={{ opacity: 1, y: "0" }}
          transition={{ ...transition, delay: 0.1 }}
          className="grid w-full gap-4 mt-8 text-lg leading-tight sm:w-11/12 md:w-9/12 lg:w-7/12 sm:self-end sm:grid-cols-2"
        >
          <p>
            At Impact, we provide a vibrant and supportive community space for
            Genshin Impact players to share tips, strategies, and experiences.
            Our diverse community of gamers is dedicated to exploring Teyvat,
            unlocking secrets, and mastering challenges together.
          </p>
          <p>
            We believe in the power of collaboration and knowledge-sharing to
            enhance the gaming experience. Beyond just gameplay, our community
            is focused on fostering friendships, learning new strategies, and
            creating memorable adventures in the world of Genshin Impact.
          </p>
        </MotionInView>
      </section>

      <Principles />
      <Contact />
    </>
  );
};
