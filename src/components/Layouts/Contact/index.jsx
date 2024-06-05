import { Hero } from "./components/Hero";
import { Message } from "./components/Message";
import { FAQ } from "./components/FAQ";
import { CardContact } from "./Card";

export const Contact = () => {
  return (
    <>
      <Hero />
      <Message />
      <FAQ />
      <CardContact
        image="https://w0.peakpx.com/wallpaper/589/345/HD-wallpaper-video-game-genshin-impact-blonde-girl-klee-genshin-impact-orange-eyes.jpg"
        className="bg-[#3B2C29]"
        motionParallaxClassname="h-[120%]"
      />
    </>
  );
};
