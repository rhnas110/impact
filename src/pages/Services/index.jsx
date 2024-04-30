import { Navbar } from "../../components/Layouts/Navbar";
import { Hero } from "../../components/Layouts/Services/Hero";
import { CardContact } from "../../components/Layouts/Contact/Card";
import { Footer } from "../../components/Layouts/Footer";
import contact from "../../assets/Contact/furina.gif";

export const Services = () => {
  return (
    <>
      <Navbar />
      <div className="mb-24">
        <Hero />
      </div>
      <div className="flex items-center justify-center w-full px-2 py-16 sm:px-4">
        <h1>I need time.</h1>
      </div>
      <div className="px-2 max-w-[1440px] mx-auto sm:py-4">
        <h3 className="w-full leading-none [font-size:clamp(1.75rem,1.182rem_+_1.82vw,3rem)] lg:w-9/12 font-bold">
          By facilitating systems innovation we believe we can generate social,
          economic and environmental outcomes that will benefit the health and
          well-being of people and the planet.
        </h3>
      </div>
      <div className="w-full mb-36">
        <div className="px-2 sm:px-8 max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-8 my-20 xl:gap-24 xl:flex-row">
            <span className="px-2 py-1 border-2 border-black rounded-3xl h-min w-min whitespace-nowrap">
              Why impact.
            </span>
            <div className="grid grid-cols-1 gap-8 sm:gap-3 sm:grid-cols-3">
              <div>???</div>
            </div>
          </div>
        </div>
      </div>
      <CardContact image={contact} className="bg-[#4F70EA]" />
      <Footer />
    </>
  );
};
