import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./Modal.css";
import { X } from "lucide-react";
import useModal from "@/store/useModal";
import ModalCalendarCreate from "../calendar/ModalCalendarCreate";
import ModalCalendarView from "../calendar/ModalCalendarView";

const Modal = () => {
  const { isOpen, type, props, closeModal } = useModal((state) => state);

  if (!isOpen || !type) return null;
  let content;
  switch (type) {
    case "CREATE_NOTE":
      content = <ModalCalendarCreate {...props} />;
      break;
    case "CREATE_NOTE_SIDEBAR":
      content = <ModalCalendarView {...props} />;
    default:
      return null;
  }
  return (
    <Dialog.Root open={isOpen} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          {content}
          <Dialog.Close asChild onClick={closeModal}>
            <button
              className="absolute right-5 top-5 cursor-pointer"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
