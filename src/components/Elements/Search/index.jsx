import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { cn } from "../../../utils";
export const Search = () => {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((open) => !open);
  }
  return (
    <div className="relative flex items-center">
      <div
        className={cn(
          "w-[300px] h-14 rounded-full overflow-hidden backdrop-blur-lg shadow-lg transform-gpu transition duration-500 origin-[100%_50%]",
          open ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
      >
        <input
          type="text"
          placeholder="Search here..."
          className="w-full h-full px-4 bg-transparent focus:outline-none placeholder:text-gray-600"
        />
      </div>
      <div
        className="absolute p-2 rounded-full shadow-lg cursor-pointer backdrop-blur-lg right-2"
        onClick={handleOpen}
      >
        <IoSearch size={25} className="rotate-90" />
      </div>
    </div>
  );
};
