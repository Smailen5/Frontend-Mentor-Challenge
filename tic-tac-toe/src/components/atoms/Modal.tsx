interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  return (
    // Overlay
    <div className="absolute inset-0 flex h-screen items-center bg-black/70">
      {/* Modal */}
      <div className="bg-semi-dark-navy w-full space-y-4 py-10 uppercase">
        {children}
      </div>
    </div>
  );
};

export default Modal;
