import { Hero as HeroLayout } from "../../Hero";
export const Hero = () => {
  return (
    <section className="w-full px-2 pt-2 sm:px-4">
      <div className="max-w-[1440px] mx-auto">
        <HeroLayout
          type={1}
          image={
            "https://media1.tenor.com/m/2h5AqdpGfi0AAAAC/arlecchino-genshin-impact.gif"
          }
          quote="Explore. Collaborate. Impact."
          scrollTarget="our-principles"
        />
      </div>
    </section>
  );
};
