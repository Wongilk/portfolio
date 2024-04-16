import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

type Prop = {
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ children, onClose }: Prop) => {
  const modalRoot = document.getElementById("modal");

  const modal = (
    <div className={classes.backdrop} onClick={onClose}>
      <div>{children}</div>
    </div>
  );

  if (modalRoot) return createPortal(modal, modalRoot);

  return <></>;
};

export default Modal;
