import { cn } from "../../../utils";
export const Video = ({ src, className, ...props }) => {
  return (
    <video
      {...props}
      className={cn(
        "object-cover object-center w-full h-full bg-[#BED2F5]",
        className
      )}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
