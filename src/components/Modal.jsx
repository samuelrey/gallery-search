import React from "react";
import { useAppContext } from "../context/context";
import ExpandedImage from "./ExpandedImage";

const Modal = ({ image }) => {
    const { isModalOpen, closeModal } = useAppContext();

    return (
        <div
            className={`${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`}
        >
            <div>
                <ExpandedImage {...image} />
                <button className="close-modal-btn" onClick={closeModal}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
