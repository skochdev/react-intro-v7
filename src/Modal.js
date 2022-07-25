import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  let elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div"); // this will be our modal
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);

    return () => {
      /* This return function cleans up the modal on unmount*/
      modalRoot.removeChild(elRef.current);
    };
  }, []);
  return createPortal(<modalRoot>{children}</modalRoot>, elRef.current);
};

export default Modal;
