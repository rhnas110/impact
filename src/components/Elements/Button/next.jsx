import { GrLinkNext } from "react-icons/gr";
import { cn } from "../../../utils";

export const Next = ({ className }) => {
  return (
    <div
      className={cn(
        "absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 rounded-tl-[2rem] bg-light",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute right-0 w-5 rotate-180 -top-5"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path>
      </svg>
      <i className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
        <GrLinkNext
          size={15}
          className="transition duration-300 text-light group-hover:scale-125 group-hover:-rotate-[22.5deg]"
        />
      </i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute bottom-0 w-5 rotate-180 -left-5"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path>
      </svg>
    </div>
  );
};
