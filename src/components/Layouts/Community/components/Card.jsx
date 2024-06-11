import { useState } from "react";
import { GrLinkNext } from "react-icons/gr";
import { Badge } from "../../../Elements/Badge";
import { Next } from "../../../Elements/Button/next";
import { MotionImage, MotionInView } from "../../../Elements/Motion";
import { community } from "../../../../data/community";
import { cn } from "../../../../utils";
import { CommunityModal } from "./Modal";

const INITIALRENDER = 10;
function getCommunity({ selectedCategory }) {
  if (selectedCategory) {
    return community.filter((item) => item.category === selectedCategory);
  }
  return community;
}
export const Card = ({ selectedCategory, showAll, setShowAll }) => {
  const [open, setOpen] = useState(false);
  const [selectedOpen, setSelectedOpen] = useState(null);

  const handleOpenModal = (data) => {
    setSelectedOpen(data);
    setOpen(true);
  };
  const data = showAll
    ? getCommunity({ selectedCategory })
    : getCommunity({ selectedCategory }).slice(0, INITIALRENDER);

  return (
    <section className="w-full px-2 py-12 mb-12 md:mb-20 sm:px-4">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 gap-8 md:gap-6 md:grid-cols-3">
          {data.map((item) => {
            const delay = selectedCategory
              ? 0
              : item.id <= INITIALRENDER
              ? 0.1 * item.id
              : 0;
            if (item?.headline)
              return (
                <Headline
                  key={item.id}
                  data={item}
                  delay={delay}
                  handleOpenModal={handleOpenModal}
                />
              );
            return (
              <div
                key={item.id}
                className="transition duration-300 cursor-pointer group hover:-translate-y-2"
                onClick={() => handleOpenModal(item)}
              >
                <MotionInView
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="flex flex-col gap-2 xs:gap-4 ovehflow-hidden"
                  transition={{
                    delay,
                    duration: 0.5,
                  }}
                >
                  <div className="md:aspect-square xs:aspect-[2/1] aspect-[3/2] overflow-hidden rounded-[2rem] relative">
                    <Badge
                      text={item.category}
                      className={`${item.bgCategory} border-none absolute px-3 z-[1] top-4 left-4 py-1.5`}
                    />
                    <MotionImage
                      src={item.image}
                      alt={item.title}
                      lazy
                      initial={{
                        opacity: 0,
                        filter: "blur(2rem)",
                      }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      className="transition duration-300 group-hover:scale-110"
                    />
                    <Next />
                  </div>
                  <p className="text-xl font-bold sm:text-3xl">{item.title}</p>
                  <p className="leading-tight sm:text-lg sm:leading-tight">
                    {item.desc}
                  </p>
                </MotionInView>
              </div>
            );
          })}
        </div>
        {!selectedCategory && !showAll && (
          <MotionInView
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="flex items-center justify-center mx-auto mt-12 cursor-pointer gap-x-8 w-max group"
            onClick={() => setShowAll(true)}
          >
            <p className="text-lg">Show All</p>
            <i className="flex items-center justify-center w-12 h-12 bg-black rounded-full">
              <GrLinkNext
                className="transition duration-300 rotate-90 rounded-full text-light group-hover:scale-125"
                size={18}
              />
            </i>
          </MotionInView>
        )}
        {selectedOpen && (
          <CommunityModal
            open={open}
            onOpenChange={setOpen}
            data={selectedOpen}
          />
        )}
      </div>
    </section>
  );
};

function Headline({ data, delay, handleOpenModal }) {
  return (
    <div
      className={cn(
        "w-full min-h-[225px] h-full transition duration-300 group hover:-translate-y-2 cursor-pointer",
        {
          "md:col-span-2": data.headline,
        }
      )}
      onClick={() => handleOpenModal(data)}
    >
      <MotionInView
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="overflow-hidden rounded-[2rem] relative"
        transition={{
          delay,
          duration: 0.5,
        }}
      >
        <div className="absolute top-4 left-4 z-[1] w-10/12 md:w-5/12 md:min-h-[30%] lg:min-h-max bg-light rounded-3xl p-4">
          <Badge
            text={data.category}
            className={`${data.bgCategory} border-none px-3 py-1.5`}
          />
          <h5 className="mt-2 font-bold leading-none md:mt-4 h5">
            {data.title}
          </h5>
        </div>
        <div className="xl:aspect-auto aspect-[3/2] w-full h-full">
          <MotionImage
            src={data.image}
            alt={data.title}
            lazy
            initial={{
              opacity: 0,
              filter: "blur(2rem)",
            }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            className="transition duration-300 group-hover:scale-110"
          />
        </div>
        <Next />
      </MotionInView>
    </div>
  );
}
