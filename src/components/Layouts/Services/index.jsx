import contact from "../../../assets/Contact/furina.gif";
import { CardContact } from "../Contact/Card";

import { Hero } from "./components/Hero";
import { Heading } from "./components/Heading";
import { Why } from "./components/Why";
import { CardParallax } from "./components/Card/CardParallax";
export const Services = () => {
  return (
    <>
      <Hero />
      <CardParallax />
      <Heading />
      <Why />
      <CardContact image={contact} className="bg-[#4F70EA]" />
    </>
  );
};
