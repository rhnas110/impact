import { MotionInView } from "../../../Elements/Motion";

const data = [
  {
    title: "Our Mission",
    desc: "To unite and empower Genshin Impact players through a supportive and creative community.",
    colorDesc: "text-[#017481]",
  },
  {
    title: "Our Vision",
    desc: "To create a global hub where Genshin Impact enthusiasts connect, share, and thrive.",
    colorDesc: "text-[#267E4F]",
  },
];
export const VSMS = () => {
  return (
    <section className="px-2 max-w-[1440px] mx-auto flex flex-col gap-y-4 my-20">
      {data.map(({ title, desc, colorDesc }) => (
        <MotionInView
          className="lg:grid grid-cols-[minmax(0,45%)_minmax(0,55%)] py-8
          border-t-2"
          key={title}
          initial={{ opacity: 0, y: "-5%" }}
          whileInView={{ opacity: 1, y: "0" }}
        >
          <h3 className="mb-2 font-bold leading-none h3 lg:mb-0">{title}</h3>
          <h4
            className={`leading-none h4 ${colorDesc} tracking-tighter font-bold`}
          >
            {desc}
          </h4>
        </MotionInView>
      ))}
    </section>
  );
};
