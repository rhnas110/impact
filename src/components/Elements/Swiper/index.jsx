// import required modules
import { Swiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";

export const Slider = ({ children, ...props }) => {
  return <Swiper {...props}>{children}</Swiper>;
};
