import { IoClose } from "react-icons/io5";
import Modal from "../../../../Elements/Modal";
import { MotionImage, MotionInView } from "../../../../Elements/Motion";
export function CommunityModal({ open, onOpenChange, data }) {
  const { bgCategory: bg, bgModal: fill, image, title, desc } = data;
  const FILL = fill ? fill : bg.split("[")[1].split("]")[0];
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content className="fixed inset-0 z-20 flex items-center justify-center focus:outline-none">
          <MotionInView
            className="max-w-[1440px] lg:h-[75vh] w-full h-auto px-2 sm:px-4 lg:grid lg:grid-cols-[minmax(0,60%),minmax(0,1fr)] gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden hidden lg:block shadow-lg">
              <MotionImage
                src={image}
                alt={title}
                lazy
                initial={{
                  opacity: 0,
                  filter: "blur(2rem)",
                }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div
              style={{ backgroundColor: FILL }}
              className={`w-full h-full p-4 lg:p-8 rounded-[2rem] rounded-tr-none lg:rounded-[2rem] lg:overflow-hidden relative max-h-[75vh] shadow-lg`}
            >
              <div
                style={{ backgroundColor: FILL }}
                className={`absolute py-2 px-10 lg:hidden rounded-t-[2rem] -top-11 right-0`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="absolute bottom-0 w-6 rotate-180 -left-6"
                >
                  <path
                    d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                    fill={FILL}
                  ></path>
                </svg>
                <button
                  className="p-1 border border-black rounded-full lg:p-2"
                  onClick={() => onOpenChange(false)}
                >
                  <IoClose size={20} />
                </button>
              </div>
              <div className="mt-3 lg:mt-0 lg:flex lg:items-start lg:justify-between lg:gap-2">
                <h4 className="font-bold leading-none h4">{title}</h4>
                <button
                  className="hidden p-2 border border-black rounded-full lg:block"
                  onClick={() => onOpenChange(false)}
                >
                  <IoClose size={20} />
                </button>
              </div>
              <div className="my-6 overflow-y-auto max-h-[calc(75vh_-_8rem)]">
                <p className="text-lg leading-tight">{desc}</p>
              </div>
            </div>
          </MotionInView>
        </Modal.Content>
      </Modal.Portal>
    </Modal>
  );
}
