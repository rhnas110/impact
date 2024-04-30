import { Link } from "react-router-dom";
import { cn } from "../../../utils";
import { Socials } from "../Navbar/socials";
export const Footer = ({ className }) => {
  return (
    <div className="w-full px-2 my-4 sm:px-4">
      <div
        className={cn(
          "max-w-[1440px] min-h-[360px] sm:h-[460px] mx-auto w-full bg-[#2A2C2D] rounded-[2rem] sm:p-8 px-4 py-6 text-light grid sm:grid-cols-2 gap-12 sm:gap-4",
          className
        )}
      >
        <div>
          <p className="text-xl leading-none sm:text-2xl md:w-9/12">
            impact. is lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Alias dolor libero soluta nam tenetur rem quis ullam veniam ab est.
          </p>
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
                <a
                  href="#"
                  className="transition duration-300 hover:underline hover:text-light"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="transition duration-300 hover:underline hover:text-light"
                >
                  Our Principles
                </a>
                <a
                  href="#"
                  className="transition duration-300 hover:underline hover:text-light"
                >
                  About
                </a>
                <a
                  href="#"
                  className="transition duration-300 hover:underline hover:text-light"
                >
                  Community
                </a>
                <a
                  href="#"
                  className="transition duration-300 hover:underline hover:text-light"
                >
                  Contact
                </a>
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
            <h1 className="order-2 text-4xl sm:order-1">
              <Link to="/">impact.</Link>
            </h1>
            <Socials className="order-1 sm:order-2" />
          </div>
        </div>
      </div>
    </div>
  );
};
