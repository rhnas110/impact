import { useRef } from "react";
import { useScroll, useTransform } from "../utils/motion";

export const useMotionParallax = (
  offset = ["end start", "start end"],
  transformRange = ["10%", "-20%"]
) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: offset,
  });
  const translateY = useTransform(scrollYProgress, [0, 1], transformRange);

  return { containerRef, translateY };
};
