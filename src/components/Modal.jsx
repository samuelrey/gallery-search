import React from "react";

const Modal = ({ image, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <button className="close-modal-btn" onClick={onClose}>
                Close
            </button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={image.src} alt={image.alt} />
            </div>
        </div>
    );
};

export default Modal;
