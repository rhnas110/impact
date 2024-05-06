import { Parallax } from "react-scroll-parallax";
import { cn } from "../../../utils";

export const ParallaxY = ({ children, fromY, toY, className, ...props }) => {
  return (
    <Parallax
      translateY={[fromY || "-48px", toY || "100px"]}
      easing={props.easing || "easeInQuad"}
      speed={props.speed || 5}
      className={cn("w-full h-full", className)}
      {...props}
    >
      {children}
    </Parallax>
  );
};
