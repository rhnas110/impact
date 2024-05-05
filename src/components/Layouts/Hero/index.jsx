import defaultVideo from "../../../assets/Home/Hero/default.mp4";
import defaultImage from "../../../assets/Home/Hero/default.webp";
import { ScrollTarget } from "../../Elements/Button";
import { Motion } from "../../Elements/Motion";

// type: 0/false = video, 1/true = image
export const Hero = ({ type, video, image, quote, scrollTarget }) => {
  const src = type ? image : video;
  return (
    <div className="w-full h-[95dvh] relative">
      <div className="w-full h-full overflow-hidden rounded-[2rem] bg-neutral-950">
        {type ? (
          <img
            src={src ? image : defaultImage}
            alt="heroImage"
            className="object-cover object-center w-full h-full"
          />
        ) : (
          <video
            id="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover object-center w-full h-full"
          >
            <source src={src ? video : defaultVideo} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-[80%] sm:pt-6 sm:pr-8 pt-4 sm:w-9/12 lg:w-1/2 bg-light rounded-tr-3xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="absolute left-0 w-10 -rotate-90 -top-10"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path>
        </svg>
        <Motion
          initial={{ opacity: 0, y: "-25%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-25%" }}
        >
          <h1 className="leading-none text-left h1">
            {quote ? quote : "I need your actions, not your words."}
          </h1>
        </Motion>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="absolute bottom-0 w-10 -rotate-90 -right-10"
        >
          <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path>
        </svg>

        <Motion
          initial={{ opacity: 0, y: "-50%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-50%" }}
        >
          <ScrollTarget target={scrollTarget ? scrollTarget : ""} />
        </Motion>
      </div>
    </div>
  );
};
