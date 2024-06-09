import { useState } from "react";
import { Badge } from "../../../Elements/Badge";
import { Next } from "../../../Elements/Button/next";
import { MotionImage, MotionInView } from "../../../Elements/Motion";
import { transition } from "../../../../config/transition.config";
import { founders } from "../../../../data/founders";
import { Mobile } from "../../../../utils/screen";
import { FounderModal } from "./Modal";

export const Founders = () => {
  const [open, setOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(null);

  const handleOpenModal = (founder) => {
    setSelectedFounder(founder);
    setOpen(true);
  };
  return (
    <section className="px-2 w-full max-w-[1440px] mx-auto lg:px-8">
      <div className="flex flex-col items-start gap-8 lg:flex-row gap-x-16">
        <MotionInView
          initial={{ opacity: 0, y: "-15%" }}
          whileInView={{ opacity: 1, y: "0" }}
          className="flex-shrink border w-min h-min"
        >
          <Badge
            text="Founders"
            className="bg-[#017481] text-light border-none px-3"
          />
        </MotionInView>
        <div className="flex flex-col flex-wrap items-center self-center flex-1 gap-4 md:items-start md:justify-normal md:flex-row">
          {founders.map((founder) => {
            const { id, name, role, image } = founder;
            return (
              <MotionInView
                key={id}
                className="flex flex-col cursor-pointer w-max h-min"
                initial={{ opacity: 0, y: Mobile ? "-5%" : "-10%" }}
                whileInView={{ ...transition, opacity: 1, y: "0" }}
                transition={{ delay: 0.1 * id }}
                whileHover={{ translateY: "-5px" }}
                onClick={() => handleOpenModal(founder)}
              >
                <div className="rounded-[2rem] overflow-hidden border aspect-square max-w-[calc(320px_-_1rem)] relative group">
                  <MotionImage
                    className="object-top transition duration-300 group-hover:scale-110"
                    src={image}
                    alt={name}
                    lazy
                    initial={{
                      opacity: 0,
                      filter: "blur(2rem)",
                    }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                  />

                  <button className="absolute bottom-0 right-0">
                    <Next />
                  </button>
                </div>
                <div className="px-2 mt-2 sm:px-0">
                  <h4 className="font-bold leading-none h4">{name}</h4>
                  <h5 className="leading-none text-gray-500 h5">{role}</h5>
                </div>
              </MotionInView>
            );
          })}
        </div>
      </div>
      {selectedFounder && (
        <FounderModal
          open={open}
          onOpenChange={setOpen}
          name={selectedFounder.name}
          role={selectedFounder.role}
          image={selectedFounder.image}
          desc={selectedFounder.desc}
        />
      )}
    </section>
  );
};
