import { Next } from "../../../Elements/Button/next";
import { MotionInView, MotionParallax } from "../../../Elements/Motion";
import { useMotionParallax } from "../../../../hooks/useMotionParallax";
import { cn } from "../../../../utils";
import { Mobile } from "../../../../utils/screen";
export const Contact = ({ className }) => {
  const { containerRef, translateY } = useMotionParallax();
  return (
    <section className="w-full px-2 sm:px-4">
      <div className="max-w-[1440px] max-h-min mx-auto grid gap-4 sm:grid-cols-[minmax(0,58%)_minmax(0,1fr)]">
        <MotionInView
          initial={{ opacity: 0, x: Mobile ? "0" : "-15%" }}
          whileInView={{ opacity: 1, x: "0" }}
          className="overflow-hidden"
        >
          <div
            className={cn(
              "w-full rounded-[2rem] overflow-hidden bg-[#267E4F] p-6 md:p-8 text-light flex h-full justify-between flex-col gap-12 sm:gap-4",
              className
            )}
          >
            <div className="flex flex-col gap-4 sm:gap-8">
              <h3 className="font-bold leading-none h3">Job opportunities.</h3>
              <div>
                <p className="leading-none lg:leading-tight lg:text-lg lg:w-10/12">
                  Impact isn&#39;t currently hiring, but we will be looking for
                  new members to join our team in the next six months to help
                  with community operations. If you&#39;re passionate about
                  Genshin Impact and building a vibrant community, reach out and
                  say hello! 👋
                </p>
              </div>
            </div>

            <p className="lg:text-lg">
              Member hiring notice board: <br />
              No new jobs at the moment! 😅
            </p>
          </div>
        </MotionInView>
        <MotionInView
          initial={{ opacity: 0, x: Mobile ? "0" : "15%" }}
          whileInView={{ opacity: 1, x: "0" }}
          className="sm:bg-[#8CAA3A] w-full sm:rounded-[2rem] overflow-hidden sm:p-6 md:p-8 text-light sm:relative  -order-1 sm:order-none"
        >
          <h4 className="hidden font-bold leading-none h4 sm:block">
            Have a question?
            <br /> Get in touch.
          </h4>
          <div
            className="aspect-video xs:aspect-[3/1.25] sm:aspect-square w-full sm:min-w-[200px] sm:max-w-[420px] rounded-[2rem] sm:rounded-full overflow-hidden sm:my-8 mx-auto"
            ref={containerRef}
          >
            <MotionParallax
              src={
                "https://c4.wallpaperflare.com/wallpaper/823/616/918/genshin-impact-nahida-genshin-impact-anime-girls-green-eyes-butterfly-hd-wallpaper-preview.jpg"
              }
              alt="Contact Image"
              lazy
              translateY={translateY}
            />
          </div>
          <div className="absolute bottom-0 left-0 hidden w-full group sm:block">
            <a href="mailto:example@impact.com">
              <span className="absolute text-lg md:text-xl bottom-2 right-20">
                Email
              </span>
              <Next />
            </a>
          </div>
        </MotionInView>
      </div>
    </section>
  );
};
