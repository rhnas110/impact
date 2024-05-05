import rs from "../../../assets/Home/Principles/rs.gif";
import { GrLinkNext } from "react-icons/gr";
import { MotionInView } from "../../Elements/Motion";
import { Image } from "../../Elements/Image";

export const Principles = () => {
  return (
    <section className="w-full h-[85dvh] px-2 my-24 sm:px-4">
      <div className="max-w-[1440px] h-full mx-auto relative flex items-center justify-center">
        <div className="w-full h-full overflow-hidden rounded-[2rem] bg-neutral-950">
          <Image src={rs} alt="rs" lazy />
        </div>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <ul className="flex flex-col items-center mb-4">
            <MotionInView
              initial={{ opacity: 0, y: "-25%" }}
              whileInView={{ opacity: 1, y: "0" }}
              amount={1}
              className="w-auto h-auto"
            >
              <li className="-mb-1 md:-mb-1.5 lg:-mb-2">
                <PrinciplesText title="Genshin Quest" />
              </li>
            </MotionInView>
            <MotionInView
              initial={{ opacity: 0, y: "-35%" }}
              whileInView={{ opacity: 1, y: "0" }}
              amount={1}
              className="w-auto h-auto"
            >
              <li className="-mb-1 md:-mb-1.5 lg:-mb-2">
                <PrinciplesText title="Genshin Universe" />
              </li>
            </MotionInView>
            <MotionInView
              initial={{ opacity: 0, y: "-45%" }}
              whileInView={{ opacity: 1, y: "0" }}
              amount={1}
              className="w-auto h-auto"
            >
              <li className="-mb-1 md:-mb-1.5 lg:-mb-2">
                <PrinciplesText title="Journey Rediscovered" />
              </li>
            </MotionInView>
            <MotionInView
              initial={{ opacity: 0, y: "-55%" }}
              whileInView={{ opacity: 1, y: "0" }}
              amount={1}
              className="w-auto h-auto"
            >
              <li>
                <PrinciplesText title="impact. Connection" />
              </li>
            </MotionInView>
          </ul>
          <MotionInView
            initial={{ opacity: 0, y: "55%" }}
            whileInView={{ opacity: 1, y: "0" }}
            amount={1}
            className="w-auto h-auto"
          >
            <a href="#" className="flex items-center gap-2 group">
              <p className="text-[#E1ABA3] bg-[#282350] rounded-3xl py-0.5 px-4 text-lg">
                Our Principles
              </p>
              <i className="text-[#E1ABA3] bg-[#282350] rounded-full py-3 px-3">
                <GrLinkNext
                  size={25}
                  className="group-hover:scale-110 group-hover:-rotate-[22.5deg] transition duration-300"
                />
              </i>
            </a>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};

const PrinciplesText = ({ title }) => {
  return (
    <h4 className="leading-none tracking-tighter text-[#E1ABA3]  w-min rounded-3xl whitespace-nowrap px-5 h4 drop-shadow-[0_2px_0_rgba(40,35,81,1)]">
      {title}
    </h4>
  );
};
