import { create } from "zustand";

type ModalType = "CREATE_NOTE_SIDEBAR" | "CREATE_NOTE" | null;
interface IModalState {
  isOpen: boolean;
  type: ModalType;
  props: Record<string, any> | null;
  openModal: (type: ModalType, props?: Record<string, any>) => void;
  closeModal: () => void;
}

const useModal = create<IModalState>((set) => ({
  isOpen: false,
  type: null,
  props: null,

  openModal: (type, props = {}) =>
    set(() => ({
      isOpen: true,
      type,
      props,
    })),

  closeModal: () =>
    set(() => ({
      isOpen: false,
      type: null,
      props: null,
    })),
}));
export default useModal;
