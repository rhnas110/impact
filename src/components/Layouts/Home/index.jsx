import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Principles } from "./components/Principles";
import { Explore } from "./components/Explore";
import { Community } from "./components/Community";
import { CardContact } from "../Contact/Card";
export const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Principles />
      <Explore />
      <Community />
      <CardContact motionParallaxClassname="h-[115%]" />
    </>
  );
};
