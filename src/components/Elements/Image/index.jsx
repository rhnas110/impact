import { cn } from "../../../utils";
export const Image = ({ src, alt, className, lazy }) => {
  return (
    <img
      src={src}
      alt={alt || "Alt Image"}
      className={cn(
        "object-cover object-center w-full h-full bg-[#BED2F5]",
        className
      )}
      loading={lazy ? "lazy" : "eager"}
    />
  );
};
