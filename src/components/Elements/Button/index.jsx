import { GrLinkNext } from "react-icons/gr";
import { scrollTarget } from "../../../utils/scroll";
export const ScrollTarget = ({ target }) => {
  return (
    <button
      className="items-center justify-center hidden mt-8 border border-black rounded-full w-14 h-14 group sm:flex"
      onClick={() => scrollTarget(target)}
    >
      <GrLinkNext
        size={20}
        className="text-black transition duration-300 rotate-90 group-hover:scale-125"
      />
    </button>
  );
};
