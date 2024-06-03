import { Link } from "react-router-dom";
import notfoundImage from "../assets/404.png";
import s from "../assets/s.png";
import { Image } from "../components/Elements/Image";
import { Motion } from "../components/Elements/Motion";
export const NotFound = () => {
  return (
    <main className="flex items-center justify-center w-full bg-[#393b40] h-dvh overflow-hidden">
      <Motion
        className="flex flex-col items-center justify-center max-w-sm gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-60 sm:w-72 md:w-80 lg:w-96">
          <Image
            src={notfoundImage}
            alt="404"
            lazy
            className="bg-transparent"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-8">
          <p className="text-lg sm:text-2xl md:text-3xl font-bold text-[#F1D9B1]">
            Page Not Found
          </p>
          <Image src={s} alt="s" lazy className="w-10 h-10 bg-transparent" />
          <Link
            to="/"
            className="rounded-lg px-4 py-2 bg-[#cdbb98] hover:bg-[#f1d9b1]"
          >
            Home »
          </Link>
        </div>
      </Motion>
    </main>
  );
};
