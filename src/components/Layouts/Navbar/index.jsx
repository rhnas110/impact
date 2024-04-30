import { Link } from "react-router-dom";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import { Logo } from "../../Elements/Logo";
import { Search } from "../../Elements/Search";
import { Socials } from "./socials";

import { motion } from "../../../utils/motion";
import { cn } from "../../../utils";

import { navLinks } from "../../../data/navbar";
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
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((openMenu) => !openMenu);
  }

  return (
    <header className="fixed z-10 w-full px-2 border-t-8 border-light bg-light lg:bg-transparent">
      <div className="mx-auto max-w-[1440px] flex justify-between items-center">
        <div className="flex items-center gap-4 lg:w-7/12">
          <Logo />
          <div className="items-center justify-between flex-1 hidden gap-2 px-8 py-4 bg-transparent rounded-full shadow-lg lg:flex backdrop-blur-lg">
            <ul className="font-medium hover:text-gray-600">
              <li>
                <Link to="/services">Services</Link>
              </li>
            </ul>

            <Socials />
          </div>
        </div>
        <div className="hidden lg:block">
          <Search />
        </div>

        <div
          className={cn("flex items-center gap-2 sm:gap-4 lg:hidden", {
            "items-end": openMenu,
          })}
        >
          <button
            className={cn(
              "py-2 px-4 font-bold bg-[#E99988] rounded-3xl transition duration-300 ",
              {
                "bg-transparent border-2 border-black py-1 mb-1.5": openMenu,
              }
            )}
            onClick={handleMenu}
          >
            {openMenu ? "Close" : "Menu"}
          </button>
          <Socials
            className={cn(
              "px-3 py-2 border-2 border-black transition duration-300 ",
              {
                "bg-[#E99988] border-none rounded-t-3xl mt-4": openMenu,
                "rounded-3xl": !openMenu,
              }
            )}
          />
        </div>
        {openMenu && (
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
              <motion.div
                className="mb-12 text-center"
                variants={linkItemVariants}
              >
                <h1 className="mb-6 text-lg font-bold">Welcome to impact.</h1>
                <div className="relative flex items-center">
                  <div className="w-full overflow-hidden rounded-full shadow-lg h-14 backdrop-blur-lg">
                    <input
                      type="text"
                      placeholder="Search here..."
                      className="w-full h-full px-4 focus:outline-none placeholder:text-gray-600 bg-light/75"
                    />
                  </div>
                  <div className="absolute p-2 rounded-full shadow-lg cursor-pointer backdrop-blur-lg right-2 bg-light/75">
                    <IoSearch size={25} className="rotate-90" />
                  </div>
                </div>
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
        )}
      </div>
    </header>
  );
};
