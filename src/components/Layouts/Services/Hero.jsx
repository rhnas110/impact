import heroVideo from "../../../assets/Services/Hero/ym.mp4";
import { GrLinkNext } from "react-icons/gr";

export const Hero = () => {
  return (
    <div className="w-full px-2 pt-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full h-[95dvh] relative">
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
          <div className="absolute bottom-0 left-0 w-[80%] sm:pt-6 sm:pr-8 pt-4 sm:w-9/12 lg:w-1/2 bg-light rounded-tr-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute left-0 w-10 -rotate-90 -top-10"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
            <h1 className="leading-none text-left home-hero-title">
              Yesterday’s experiences make me stronger today.
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              className="absolute bottom-0 w-10 -rotate-90 -right-10"
            >
              <path
                d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                fill="#F9F8F6"
              ></path>
            </svg>
            <button className="items-center justify-center hidden mt-8 border border-black rounded-full w-14 h-14 group sm:flex">
              <GrLinkNext
                size={20}
                className="text-black transition duration-300 rotate-90 group-hover:scale-125"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
