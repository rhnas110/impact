import { GrLinkNext } from "react-icons/gr";
import { cn } from "../../../utils";
import { scrollTarget } from "../../../utils/scroll";
export const ScrollTarget = ({ target, className, color = "text-black" }) => {
  return (
    <button
      className={cn(
        "w-12 h-12 flex items-center justify-center mt-4 xs:mt-8 border border-black rounded-full xs:w-14 xs:h-14 group",
        className
      )}
      onClick={() => scrollTarget(target)}
    >
      <GrLinkNext
        size={20}
        className={`${color} transition duration-300 rotate-90 group-hover:scale-125`}
      />
    </button>
  );
};
