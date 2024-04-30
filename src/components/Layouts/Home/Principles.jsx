import heroVideo from "../../../assets/Home/Principles/ny.mp4";
import { GrLinkNext } from "react-icons/gr";

export const Principles = () => {
  return (
    <div className="w-full h-[85dvh] px-2 my-24 sm:px-4">
      <div className="max-w-[1440px] h-full mx-auto relative flex items-center justify-center">
        <div className="w-full h-full overflow-hidden rounded-[2rem] bg-neutral-950">
          <video
            id="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover object-center w-full h-full"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <ul className="flex flex-col items-center mb-4">
            <li className="-mb-3.5">
              <PrinciplesText title="Genshin Quest" />
            </li>
            <li className="-mb-3.5">
              <PrinciplesText title="Genshin Universe" />
            </li>
            <li className="-mb-3.5">
              <PrinciplesText title="Journey Rediscovered" />
            </li>
            <li>
              <PrinciplesText title="impact. Connection" />
            </li>
          </ul>
          <a href="#" className="flex items-center gap-2">
            <p className="text-[#E1ABA3] bg-[#2F1726] rounded-3xl py-0.5 px-4 text-lg">
              Our Principles
            </p>
            <i className="text-[#E1ABA3] bg-[#2F1726] rounded-full py-3 px-3">
              <GrLinkNext size={25} />
            </i>
          </a>
        </div>
      </div>
    </div>
  );
};

const PrinciplesText = ({ title }) => {
  return (
    <h4 className="leading-none tracking-tighter text-[#E1ABA3] bg-[#2F1726] w-min rounded-3xl whitespace-nowrap pt-2.5 pb-3.5 px-5 [font-size:_clamp(1.5rem,1.159rem_+_1.09vw,2.25rem)]">
      {title}
    </h4>
  );
};
