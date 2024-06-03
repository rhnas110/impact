import { Link } from "react-router-dom";

import { FullSearch } from "../../Elements/Search";
import { navLinks } from "../../../data/navbar";
import { motion } from "../../../utils/motion";

const modalVariants = {
  hidden: {
    y: "64px",
    opacity: 0,
  },
  visible: {
    y: "64px",
    opacity: 1,
    transition: {
      type: "tween", // Set transition type to 'tween'
      duration: 0.3, // Specify duration
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
};

const linkItemVariants = {
  hidden: { opacity: 0, y: "-50%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut", // Add ease-out easing function
    },
  },
  exit: {
    opacity: 0,
    y: "-50%",
    transition: {
      duration: 0.1,
      ease: "easeOut", // Add ease-out easing function
    },
  },
};

const navLinksVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
export const HeaderMobile = () => {
  return (
    <motion.div
      className="fixed rounded-3xl rounded-tr-none mx-2 inset-0 flex items-center justify-center bg-[#E99988] h-[90dvh]"
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="relative w-full h-[90%] px-4"
        variants={navLinksVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div className="mb-12 text-center" variants={linkItemVariants}>
          <h1 className="mb-6 text-lg font-bold">Welcome to impact.</h1>
          <FullSearch />
        </motion.div>
        <div className="flex flex-col justify-center gap-4 items-left">
          {navLinks.map((link, index) => (
            <Link key={index} to={link.url}>
              <motion.span
                className="text-4xl font-light text-left cursor-pointer"
                variants={linkItemVariants}
              >
                {link.title}
              </motion.span>
              <motion.hr
                className="w-full h-px bg-black rounded"
                variants={linkItemVariants}
              />
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
