import { MotionInView } from "../../../Elements/Motion";
import { Word } from "../../../Elements/Word";
export const Heading = () => {
  return (
    <section className="px-2 max-w-[1440px] mx-auto py-8">
      <MotionInView
        initial={{ opacity: 0, x: "-15%" }}
        whileInView={{ opacity: 1, x: "0" }}
        className="lg:w-9/12"
      >
        <Word />
      </MotionInView>
    </section>
  );
};
