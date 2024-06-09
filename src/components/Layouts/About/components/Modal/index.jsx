import { IoClose } from "react-icons/io5";
import Modal from "../../../../Elements/Modal";
import { MotionImage, MotionInView } from "../../../../Elements/Motion";
export function FounderModal({ open, onOpenChange, image, name, role, desc }) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.Content className="fixed inset-0 z-20 flex items-center justify-center focus:outline-none">
          <MotionInView
            className="max-w-[1440px] lg:h-[75vh] w-full h-auto px-2 sm:px-4 lg:grid lg:grid-cols-[minmax(0,30%),minmax(0,1fr)] gap-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full h-full rounded-[2rem] overflow-hidden hidden lg:block shadow-lg">
              <MotionImage
                src={image}
                alt={name}
                lazy
                initial={{
                  opacity: 0,
                  filter: "blur(2rem)",
                }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="w-full h-full bg-[#267E4F] p-5 lg:p-8 rounded-[2rem] rounded-tr-none lg:rounded-[2rem] lg:overflow-hidden relative max-h-[75vh] shadow-lg">
              <div className="absolute py-2 px-10 lg:p-0 lg:bg-transparent rounded-t-[2rem] bg-[#267E4F] -top-11 right-0 lg:top-9 lg:right-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="absolute bottom-0 w-6 rotate-180 -left-6 lg:hidden"
                >
                  <path
                    d="m100,0H0v100C0,44.77,44.77,0,100,0Z"
                    fill="#267E4F"
                  ></path>
                </svg>
                <button
                  className="p-1 border border-black rounded-full lg:p-2"
                  onClick={() => onOpenChange(false)}
                >
                  <IoClose size={20} />
                </button>
              </div>
              <h3 className="font-bold leading-none h3">{name}</h3>
              <h4 className="mt-3 leading-none opacity-75 h4">{role}</h4>
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
