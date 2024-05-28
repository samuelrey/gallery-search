import React from "react";

const Modal = ({ image, onClose }) => {
    const { src, alt, isVideo } = image;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <button className="modal-close-button" onClick={onClose}>
                Close
            </button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {!isVideo ? (
                    <img src={src} alt={alt} />
                ) : (
                    <video src={src} alt={alt} autoPlay />
                )}
            </div>
        </div>
    );
};

export default Modal;
