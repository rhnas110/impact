import { motion } from "../../../utils/motion";
import { transition } from "../../../config/transition.config";
import { cn } from "../../../utils";

export const Motion = ({ children, className, ...props }) => {
  return (
    <motion.div
      {...props}
      transition={props.transition || transition}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
};

export const MotionInView = ({ children, className, ...props }) => {
  return (
    <motion.div
      {...props}
      viewport={{ once: true, amount: props.amount || 0.5 }}
      transition={props.transition || transition}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
};

export const MotionImage = ({ src, alt, lazy, className, ...props }) => {
  return (
    <motion.img
      {...props}
      transition={props.transition || transition}
      className={cn(
        "w-full h-full object-cover object-center bg-[#BED2F5]",
        className
      )}
      src={src}
      alt={alt || "Alt Image"}
      loading={lazy ? "lazy" : "eager"}
    />
  );
};
