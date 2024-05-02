import { Link } from "react-router-dom";
import { useState } from "react";

import { Logo } from "../../Elements/Logo";
import { Search } from "../../Elements/Search";
import { Socials } from "./socials";

import { cn } from "../../../utils";

import { navLinks } from "../../../data/navbar";
import { HeaderMobile } from "./headerMobile";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleMenu() {
    setOpenMenu((openMenu) => !openMenu);
  }

  return (
    <header className="fixed z-10 w-full px-2 border-t-8 border-light bg-light lg:bg-transparent">
      <div className="mx-auto max-w-[1440px] flex justify-between items-center">
        <nav className="flex items-center gap-4 lg:w-7/12">
          <Logo />
          <div className="items-center justify-between flex-1 hidden gap-2 px-8 py-4 rounded-full shadow-lg lg:flex backdrop-blur-lg bg-light/75">
            <ul className="flex gap-2 font-medium">
              {navLinks.map((link, index) => (
                <li key={index} className="hover:text-gray-600">
                  <Link to={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>

            <Socials />
          </div>
        </nav>
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
        {openMenu && <HeaderMobile />}
      </div>
    </header>
  );
};
