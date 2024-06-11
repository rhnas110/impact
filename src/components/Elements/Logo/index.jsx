import { Link } from "react-router-dom";
import { cn } from "../../../utils";
import { scrollTo } from "../../../utils/scroll";
export const Logo = () => {
  return (
    <h1 className="relative p-2 text-4xl lg:p-4 bg-light rounded-br-3xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute top-0 hidden w-10 -right-10 lg:block"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path>
      </svg>
      <Link to="/" onClick={() => scrollTo(0, 0)}>
        impact.
      </Link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        className="absolute left-0 w-10 -bottom-10"
      >
        <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill="#F9F8F6"></path>
      </svg>
    </h1>
  );
};

export const LogoPlain = ({ className }) => {
  return (
    <h1 className={cn("text-4xl", className)}>
      <Link to="/" onClick={() => scrollTo(0, 0)}>
        impact.
      </Link>
    </h1>
  );
};
