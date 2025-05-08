import { ModalProps } from "../../types/atoms.types";

const Modal = ({ children }: ModalProps) => {
  return (
    // Overlay
    <div className="absolute inset-0 flex h-screen items-center bg-black/70">
      {/* Modal */}
      <div className="bg-semi-dark-navy flex w-full items-center justify-center py-10 uppercase">
        <div className="h-[140px] w-[279px] space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
