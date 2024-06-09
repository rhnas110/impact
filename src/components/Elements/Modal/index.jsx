import "./styles.css";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";
import { cn } from "../../../utils";

export default function Modal({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

export function StyledModal({ title, children }) {
  return (
    <Dialog.Portal>
      <ModalOverlay />
      <Dialog.Content className="lg:p-8 p-4 shadow fixed z-20 w-[95vw] max-w-md -translate-x-1/2 -translate-y-1/2 border rounded border-background DialogContent bg-backgroundSecondary left-1/2 top-1/2">
        <div className="relative flex items-center justify-center mb-4 text-gray-400">
          <Dialog.Title className="text-xl font-semibold">{title}</Dialog.Title>
          <Dialog.Close
            className="absolute top-0 right-0 hover:text-gray-500"
            asChild
            aria-label="Close"
          >
            <button>
              <IoClose className="w-7 h-7" />
            </button>
          </Dialog.Close>
        </div>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
function ModalOverlay({ className }) {
  return (
    <Dialog.Overlay
      className={cn(
        "DialogOverlay fixed inset-0 z-20 bg-neutral-950/50 backdrop-blur-sm",
        className
      )}
    />
  );
}

Modal.Button = Dialog.Trigger;
Modal.Portal = Dialog.Portal;
Modal.Overlay = ModalOverlay;
Modal.Content = Dialog.Content;
Modal.Title = Dialog.Title;
Modal.Description = Dialog.Description;
Modal.Close = Dialog.Close;
