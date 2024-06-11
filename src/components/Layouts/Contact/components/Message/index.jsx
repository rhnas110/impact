import { Next } from "../../../../Elements/Button/next";
import { MotionImage, MotionInView } from "../../../../Elements/Motion";
import { transition } from "../../../../../config/transition.config";
import { Mobile } from "../../../../../utils/screen";

const card = [
  {
    id: 1,
    name: "Looking to collaborate?",
    image: "https://media1.tenor.com/m/JxMeO3pEEaUAAAAC/keqing.gif",
    bg: "bg-[#BFB9E3]",
  },
  {
    id: 2,
    name: "I’ve got an idea",
    image: "https://media1.tenor.com/m/jbAAhPhzASgAAAAC/chibi-genshin.gif",
    bg: "bg-[#DCB688]",
  },
  {
    id: 3,
    name: "I’m looking for help",
    image: "https://media1.tenor.com/m/XG7UiWjZAzAAAAAC/smol-cute.gif",
    bg: "bg-[#BED2F5]",
  },
];
export const Message = () => {
  return (
    <section className="w-full px-2 py-10 sm:px-4" id="message">
      <div className="max-w-[1440px] mx-auto">
        <MotionInView
          initial={{ opacity: 0, y: "-10%" }}
          whileInView={{ opacity: 1, y: "0" }}
        >
          <h2 className="mb-16 leading-none tracking-tighter text-center h2">
            Curious? So are we.
          </h2>
        </MotionInView>
        <div className="grid w-11/12 grid-cols-1 gap-4 mx-auto sm:grid-cols-3">
          {card.map((item) => (
            <MotionInView
              key={item.id}
              className={`${item.bg} relative group cursor-pointer rounded-[2rem] px-4 py-6 max-h-[560px] min-h-[300px] h-auto flex items-center justify-center flex-col gap-y-5`}
              initial={{ opacity: 0, y: Mobile ? "-5%" : "-10%" }}
              whileInView={{ opacity: 1, y: "0" }}
              transition={{ ...transition, delay: 0.1 * item.id }}
            >
              <h5 className="font-bold leading-none h5">{item.name}</h5>
              <div className="w-10/12 mb-12 overflow-hidden border rounded-full aspect-square">
                <MotionImage
                  src={item.image}
                  alt="Message Image"
                  lazy
                  initial={{
                    opacity: 0,
                    filter: "blur(2rem)",
                  }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  className="transition duration-500 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>
              <p className="absolute text-lg bottom-2 right-20">Learn More</p>
              <Next />
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
};
