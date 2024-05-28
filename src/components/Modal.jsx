import React from "react";
import ExpandedImage from "./ExpandedImage";

const Modal = ({ image, onClose }) => {
    return (
        <div className="modal-overlay show-modal" onClick={onClose}>
            <div>
                <ExpandedImage {...image} />
                <button className="close-modal-btn" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
