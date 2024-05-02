import rs from "../../../assets/Home/Principles/rs.gif";
import { GrLinkNext } from "react-icons/gr";

export const Principles = () => {
  return (
    <section className="w-full h-[85dvh] px-2 my-24 sm:px-4">
      <div className="max-w-[1440px] h-full mx-auto relative flex items-center justify-center">
        <div className="w-full h-full overflow-hidden rounded-[2rem] bg-neutral-950">
          <img
            src={rs}
            alt="rs"
            className="object-cover object-center w-full h-full"
          />
        </div>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <ul className="flex flex-col items-center mb-4">
            <li className="-mb-1 md:-mb-1.5 lg:-mb-2">
              <PrinciplesText title="Genshin Quest" />
            </li>
            <li className="-mb-1 md:-mb-1.5 lg:-mb-2">
              <PrinciplesText title="Genshin Universe" />
            </li>
            <li className="-mb-1 md:-mb-1.5 lg:-mb-2">
              <PrinciplesText title="Journey Rediscovered" />
            </li>
            <li>
              <PrinciplesText title="impact. Connection" />
            </li>
          </ul>
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
