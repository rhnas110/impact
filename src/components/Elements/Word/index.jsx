import { cn } from "../../../utils";
export const Word = ({ children, className }) => {
  return (
    <h3 className={cn("w-full font-bold leading-none h3", className)}>
      {children || word}
    </h3>
  );
};

const word = (
  <>
    Experience the thrilling journey through the Genshin Impact immersive
    universe, where you can chill, connect with friends, and leave a lasting{" "}
    <span className="text-[#D9DC4E] drop-shadow-[0_2px_0_rgba(51,51,51,1)]">
      impact.
    </span>
  </>
);
