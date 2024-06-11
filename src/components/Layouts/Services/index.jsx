import contact from "../../../assets/Contact/furina.gif";

import { Hero } from "./components/Hero";
import { CardParallax } from "./components/Card/CardParallax";
import { Heading } from "./components/Heading";
import { Why } from "./components/Why";
import { CardContact } from "../Contact/Card";
export const Services = () => {
  return (
    <>
      <Hero />
      <CardParallax />
      <Heading />
      <Why />
      <CardContact
        image={contact}
        className="bg-[#4F70EA]"
        motionParallaxClassname="h-[115%]"
      />
    </>
  );
};
