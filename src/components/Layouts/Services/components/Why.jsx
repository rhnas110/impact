import { Image } from "../../../Elements/Image";
import { MotionInView } from "../../../Elements/Motion";
import { why } from "../../../../data/services";
export const Why = () => {
  return (
    <section className="w-full">
      <div className="px-2 sm:px-8 max-w-[1440px] mx-auto py-12">
        <div className="flex flex-col gap-8 xl:gap-24 xl:flex-row">
          <MotionInView
            initial={{ opacity: 0, x: "-30%" }}
            whileInView={{ opacity: 1, x: "0" }}
          >
            <span className="px-2 py-1 border-2 border-black rounded-3xl h-min w-min whitespace-nowrap">
              Why impact.
            </span>
          </MotionInView>
          <div className="grid grid-cols-1 gap-8 md:gap-3 md:grid-cols-3">
            {why.map(({ id, title, desc, icon, bg, el, renderEl }) => {
              return (
                <MotionInView
                  initial={{ opacity: 0, y: "-5%" }}
                  whileInView={{ opacity: 1, y: "0" }}
                  key={id}
                  className="flex"
                >
                  <div className="flex flex-col justify-between gap-8 p-4 overflow-hidden bg-white border shadow-lg rounded-xl">
                    <div className="flex flex-col gap-4">
                      <h4 className="font-bold leading-none h4">{title}</h4>
                      <h5 className="leading-none h5">{desc}</h5>
                    </div>
                    <div
                      className={`${bg} w-12 md:w-16 overflow-hidden rounded-full aspect-square`}
                    >
                      {el ? (
                        renderEl
                      ) : (
                        <Image src={icon} alt={"icon-" + id} lazy />
                      )}
                    </div>
                  </div>
                </MotionInView>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
