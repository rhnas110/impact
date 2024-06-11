import { Badge } from "../../../Elements/Badge";
import { MotionInView } from "../../../Elements/Motion";
import { category } from "../../../../data/community";
import { cn } from "../../../../utils";

export const Hero = ({ selectedCategory, handleClick }) => {
  return (
    <section className="w-full px-2 pt-20 lg:pt-28 sm:px-4">
      <div className="max-w-[1440px] mx-auto flex flex-col py-20 gap-y-16 items-center justify-center">
        <Header />
        <Category
          selectedCategory={selectedCategory}
          handleClick={handleClick}
        />
      </div>
      <MotionInView initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <hr className="w-full border-black max-w-[1430px] mx-auto" />
      </MotionInView>
    </section>
  );
};

function Header() {
  return (
    <MotionInView
      initial={{ opacity: 0, y: "-10%" }}
      whileInView={{ opacity: 1, y: "0" }}
      className="font-bold text-center"
    >
      <h2 className="leading-none h2">Community</h2>
      <h5 className="mt-4 leading-none h5">
        We think big and we think as a collective.
      </h5>
    </MotionInView>
  );
}
function Category({ selectedCategory, handleClick }) {
  return (
    <MotionInView
      initial={{ opacity: 0, y: "-15%" }}
      whileInView={{ opacity: 1, y: "0" }}
      className="flex flex-wrap items-center justify-center w-full gap-2"
    >
      {category.map((item) => (
        <Badge
          key={item.id}
          text={item.name}
          className={cn(
            "flex-shrink px-5 py-1.5 cursor-pointer transition duration-300",
            {
              "bg-black text-light": selectedCategory === item.name,
            }
          )}
          onClick={() => handleClick(item.name)}
        />
      ))}
      <span
        className={cn("ml-2 xs:ml-4 cursor-pointer transition duration-300", {
          "underline scale-110 underline-offset-2": !selectedCategory,
        })}
        onClick={() => handleClick("")}
      >
        Show All
      </span>
    </MotionInView>
  );
}
