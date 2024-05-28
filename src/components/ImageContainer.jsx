import React, { useState } from "react";
import GalleryImage from "./GalleryImage";
import Modal from "./Modal";
import useModal from "../hooks/useModal";

const ImageContainer = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { isOpen, openModal, closeModal } = useModal();

    const handleImageClick = (image) => {
        setSelectedImage(image);
        openModal();
    }

    return (
        <div>
            {images.map((image) => {
                return (
                    <GalleryImage
                        {...image}
                        onClick={() => handleImageClick(image)}
                    />
                );
            })}
            {isOpen && (
                <Modal image={selectedImage} onClose={closeModal} />
            )}
        </div>
    );
};

export default ImageContainer;
