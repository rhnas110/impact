import { cn } from "../../../utils";
export const Badge = ({ text, className = "" }) => {
  return (
    <span
      className={cn(
        "px-2 py-1 border-2 border-black rounded-3xl h-min w-min whitespace-nowrap",
        className
      )}
    >
      {text}
    </span>
  );
};
