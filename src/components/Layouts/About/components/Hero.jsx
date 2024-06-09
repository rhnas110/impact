import { Hero as HeroLayout } from "../../Hero";
export const Hero = () => {
  return (
    <section className="w-full px-2 py-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto">
        <HeroLayout
          scrollTarget="about"
          video="https://static.moewalls.com/videos/preview/2024/river-cave-liyue-genshin-impact-preview.mp4"
          quote="Empowering Your Journey Together"
        />
      </div>
    </section>
  );
};
