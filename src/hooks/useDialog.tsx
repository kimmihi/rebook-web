import { useRef } from "react";

const useDialog = () => {
  const ref = useRef<HTMLDialogElement | null>(null);

  const handleOpen = () => {
    ref.current?.showModal();
  };

  const handleClose = () => {
    ref.current?.close();
  };

  return {
    ref,
    onOpen: handleOpen,
    onClose: handleClose,
  };
};

export default useDialog;
