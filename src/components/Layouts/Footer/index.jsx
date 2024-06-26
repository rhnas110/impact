import { LogoPlain } from "../../Elements/Logo";
import { Socials } from "../Navbar/socials";
import { navLinks } from "../../../data/navbar";
import { cn } from "../../../utils";
export const Footer = ({ className }) => {
  return (
    <footer className="w-full px-2 my-4 sm:px-4">
      <div
        className={cn(
          "max-w-[1440px] min-h-[360px] sm:h-[460px] mx-auto w-full bg-[#2A2C2D] rounded-[2rem] sm:p-8 px-4 py-6 text-light grid sm:grid-cols-2 gap-12 sm:gap-4",
          className
        )}
      >
        <div className="flex flex-col justify-between">
          <h5 className="leading-none h5 lg:w-9/12 md:w-10/12">
            impact. is your gateway to the enchanting universe of Genshin
            Impact. Explore Teyvat&#39;s breathtaking landscapes, connect with
            friends, and uncover mysteries. Welcome to impact, where your
            journey begins.
          </h5>
          <div className="hidden sm:block">
            <p>Website by</p>
            <a href="https://bit.ly/aeseportofolio" target="_blank">
              <h5 className="italic leading-none hover:underline h5">
                aese.dev
              </h5>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-12 sm:gap-0">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-2 gap-2 lg:w-7/12">
              <div>
                <p>Nations of Teyvat</p>
                <a href="tel:(69) 6969 6969" className="hover:underline">
                  (69) 6969 6969
                </a>
              </div>
              <div>
                <p>impact. Platform 69</p>
                <a href="tel:(xx) xxxx xxxx" className="hover:underline">
                  (xx) xxxx xxxx
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:w-7/12 text-neutral-400">
              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <a
                    href={link.url}
                    className="transition duration-300 hover:underline hover:text-light"
                    key={index}
                  >
                    {link.title}
                  </a>
                ))}
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                  <a
                    href="#"
                    className="transition duration-300 hover:underline hover:text-light"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="transition duration-300 hover:underline hover:text-light"
                  >
                    Terms and Conditions
                  </a>
                </div>
                <p>© 2024 impact.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:gap-0 sm:items-center sm:flex-row sm:justify-between">
            <div className="flex justify-between order-2 sm:order-1">
              <LogoPlain />
              <div className="sm:hidden">
                <p>Website by</p>
                <a href="https://bit.ly/aeseportofolio" target="_blank">
                  <h5 className="italic leading-none hover:underline h5">
                    aese.dev
                  </h5>
                </a>
              </div>
            </div>
            <Socials className="order-1 sm:order-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};
