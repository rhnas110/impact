import { MotionInView } from "../../../Elements/Motion";
import { Word } from "../../../Elements/Word";
import { transition } from "../../../../config/transition.config";
import { Mobile } from "../../../../utils/screen";
export const Heading = () => {
  return (
    <section
      className="px-2 max-w-[1440px] mx-auto my-32 lg:my-40 flex flex-col"
      id="about"
    >
      <MotionInView
        initial={{ opacity: 0, y: "-20%" }}
        whileInView={{ opacity: 1, y: "0" }}
        className="w-full lg:w-7/12"
      >
        <Word>
          Welcome to{" "}
          <span className="text-[#267E4F] drop-shadow-[0_2px_0_rgba(51,51,51,1)]">
            impact.
          </span>{" "}
          – where Genshin Impact enthusiasts unite, thrive, and have fun!
        </Word>
      </MotionInView>
      <MotionInView
        initial={{ opacity: 0, y: Mobile ? "-5%" : "-25%" }}
        whileInView={{ opacity: 1, y: "0" }}
        transition={{ ...transition, delay: 0.1 }}
        className="grid w-full gap-4 mt-8 text-lg leading-tight sm:w-11/12 md:w-9/12 lg:w-7/12 sm:self-end sm:grid-cols-2"
      >
        <p>
          In 2024, amidst unprecedented times, we witnessed something truly
          remarkable within the Genshin Impact community - its resilience and
          creativity shone through.
          <br />
          <br />
          Inspired by this spirit, we seized the opportunity to create a space
          that not only celebrates the game but also the incredible people who
          make it special.
        </p>
        <p
          dangerouslySetInnerHTML={{
            __html: `At Impact, we're all about bringing players together to share tips,
            stories, and laughs. Whether you're a seasoned adventurer or just
            starting your journey in Teyvat, there's a place for you here.
            <br /><br />
            From helpful guides and fan art to lively discussions and fun events,
            there's always something exciting happening in our community.
            Together, we're making the world of Genshin Impact even more magical.
            <br /><br />
            So come join us at Impact and let's embark on this adventure together!`,
          }}
        />
      </MotionInView>
    </section>
  );
};
