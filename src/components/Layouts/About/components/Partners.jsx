import wibu1 from "../../../../assets/About/Partners/wibu1.png";
import wibu2 from "../../../../assets/About/Partners/wibu2.png";
import wibu3 from "../../../../assets/About/Partners/wibu3.png";
import wibu4 from "../../../../assets/About/Partners/wibu4.png";
import wibu5 from "../../../../assets/About/Partners/wibu5.png";
import wibu6 from "../../../../assets/About/Partners/wibu6.png";
import wibu7 from "../../../../assets/About/Partners/wibu7.png";
import wibu8 from "../../../../assets/About/Partners/wibu8.png";
import group1 from "../../../../assets/About/Groups/group1.png";
import { Badge } from "../../../Elements/Badge";
import { MotionImage, MotionInView } from "../../../Elements/Motion";
import { transition } from "../../../../config/transition.config";
import { cn } from "../../../../utils";
import { Mobile } from "../../../../utils/screen";

const partners = [
  {
    id: 1,
    image: wibu1,
  },
  {
    id: 2,
    image: wibu2,
  },
  {
    id: 3,
    image: wibu3,
  },
  {
    id: 4,
    image: wibu4,
  },
  {
    id: 5,
    image: wibu5,
  },
  {
    id: 6,
    image: wibu6,
  },
  {
    id: 7,
    image: wibu7,
  },
  {
    id: 8,
    image: wibu8,
  },
];
const group = [
  {
    id: 1,
    image: group1,
  },
  {
    id: 2,
    image:
      "https://ugc.production.linktr.ee/t7np0oArRf2Rx2YmrzNz_Ew4o3XJ7h09jx6xQ",
  },
];
export const Partners = () => {
  return (
    <section className="px-2 w-full max-w-[1440px] mx-auto lg:px-8 lg:my-28 my-20">
      <MotionInView
        className="flex flex-col items-center justify-center gap-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Badge
          text="Our Partners"
          className="bg-[#267E4F] text-light px-3 border-none"
        />
        <h4 className="w-full font-bold leading-none text-center sm:w-10/12 lg:w-8/12 h4">
          Building an accessible future for bio-innovation infrastructure,
          together.
        </h4>
      </MotionInView>
      <ScrollX>
        {partners.map(({ id, image }) => {
          return (
            <MotionInView
              className="overflow-hidden aspect-square max-w-[250px] flex-shrink-0 lg:flex-shrink"
              key={id}
              initial={{ opacity: Mobile ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ...transition, delay: 0.1 * id }}
            >
              <MotionImage
                className="object-contain bg-transparent"
                src={image}
                alt={"wibu" + id}
                lazy
                initial={{
                  opacity: 0,
                  filter: "blur(2rem)",
                }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
              />
            </MotionInView>
          );
        })}
      </ScrollX>
      <MotionInView
        className="flex flex-col items-center justify-center mt-8 md:mt-16 gap-y-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <Badge
          text="Groups We Support"
          className="bg-[#267E4F] text-light px-3 border-none"
        />
        <h4 className="w-full font-bold leading-none text-center sm:w-8/12 lg:w-6/12 h4">
          Supporting good science is at the heart of what we do.
        </h4>
      </MotionInView>
      <ScrollX className="justify-normal xs:justify-center">
        {group.map(({ id, image }) => {
          return (
            <MotionInView
              className="overflow-hidden aspect-square max-w-[225px] flex-shrink-0 lg:flex-shrink"
              key={id}
              initial={{ opacity: Mobile ? 1 : 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ...transition, delay: 0.1 * id }}
            >
              <MotionImage
                className="object-contain bg-transparent"
                src={image}
                alt={"wibu" + id}
                lazy
                initial={{
                  opacity: 0,
                  filter: "blur(2rem)",
                }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
              />
            </MotionInView>
          );
        })}
      </ScrollX>
    </section>
  );
};

function ScrollX({ children, className }) {
  return (
    <div
      className={cn(
        "flex overflow-x-auto gap-x-4 scrollbar-hide items-center",
        className
      )}
    >
      {children}
    </div>
  );
}
