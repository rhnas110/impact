import defaultImage from "../../../assets/Contact/default.gif";
import { GrLinkNext } from "react-icons/gr";
import { cn } from "../../../utils";
import { Mobile } from "../../../utils/screen";

import { MotionInView } from "../../Elements/Motion";
import { Image } from "../../Elements/Image";

export const CardContact = ({ image, className }) => {
  return (
    <section className="w-full px-2 sm:px-4">
      <div className="max-w-[1440px] max-h-min mx-auto grid w-full gap-4 sm:grid-cols-[minmax(0,40%)_minmax(0,1fr)]">
        <div className="aspect-video w-full sm:min-h-[300px] sm:h-[460px] rounded-[2rem] overflow-hidden">
          <MotionInView
            initial={{ opacity: 0, x: Mobile ? "0" : "-15%" }}
            whileInView={{ opacity: 1, x: "0" }}
          >
            <Image
              src={image ? image : defaultImage}
              alt="Contact Image"
              lazy
            />
          </MotionInView>
        </div>
        <MotionInView
          initial={{ opacity: 0, x: Mobile ? "0" : "15%" }}
          whileInView={{ opacity: 1, x: "0" }}
        >
          <div
            className={cn(
              "rounded-[2rem] overflow-hidden bg-[#3E304F] p-4 md:p-8 text-light flex h-full justify-between flex-col gap-12 sm:gap-4",
              className
            )}
          >
            <div className="flex flex-col gap-16">
              <h3 className="font-bold leading-none h3">
                A lovely community impact. <br /> Play with impact.
              </h3>
              <div>
                <input
                  type="email"
                  id="email"
                  className="block w-full px-3 py-4 text-sm text-gray-900 sm:text-lg focus:outline-none bg-gray-50 rounded-2xl"
                  placeholder="Your Email Address"
                  required
                />
                <div className="flex justify-end mt-3 group">
                  <a
                    href="#"
                    className="flex items-center gap-1"
                    title="Subscribe"
                  >
                    <p className="text-light rounded-3xl py-0.5 px-4 sm:text-lg">
                      Subscribe
                    </p>
                    <i className="text-light bg-[#2F1726] rounded-full py-3 px-3">
                      <GrLinkNext
                        size={20}
                        className="transition duration-300 group-hover:scale-110 group-hover:-rotate-[22.5deg]"
                      />
                    </i>
                  </a>
                </div>
              </div>
            </div>

            <p className="lg:text-lg lg:w-7/12">
              Subscribe for updates, news, events, and community resources.
            </p>
          </div>
        </MotionInView>
      </div>
    </section>
  );
};
