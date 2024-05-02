import { Link } from "react-router-dom";
import { cn } from "../../../utils";
import { socialsMenu } from "../../../data/social";

export const Socials = ({ className }) => {
  return (
    <ul className={cn(`flex gap-x-2`, className)}>
      {socialsMenu.map((social, index) => {
        return (
          <li key={index} className="hover:text-gray-600">
            <Link href={social.path} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
