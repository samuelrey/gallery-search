import React from "react";
import { useAppContext } from "./context";
import FieldwireImage from "./FieldwireImage";

const Modal = (image) => {
    const { isModalOpen, closeModal } = useAppContext()

    return <div className={`${ isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay' }`}>
        <div>
            <FieldwireImage {...image}/>
            <button className="close-modal-btn"onClick={closeModal}>
                Close
            </button>
        </div>
    </div>
}

export default Modal