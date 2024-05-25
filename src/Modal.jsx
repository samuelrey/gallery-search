import React from "react";
import { useAppContext } from "./context";
import ExpandedImage from "./ExpandedImage";

const Modal = (image) => {
  const { isModalOpen, closeModal } = useAppContext();

  console.log(image);
  return (
    <div
      className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}
    >
      <div>
        <ExpandedImage />
        <button className="close-modal-btn" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
