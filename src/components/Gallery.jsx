import React, { useState } from "react";
import GalleryImage from "./GalleryImage";
import Modal from "./Modal";
import useModal from "../hooks/useModal";

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const { isOpen, openModal, closeModal } = useModal();

    const handleImageClick = (image) => {
        setSelectedImage(image);
        openModal();
    };

    const aggregateTags = (images) => {
        const tagByCount = new Map();

        images.forEach(({ tags }) => {
            tags.forEach(({ display_name }) => {
                if (tagByCount.has(display_name)) {
                    tagByCount.set(
                        display_name,
                        tagByCount.get(display_name) + 1
                    );
                } else {
                    tagByCount.set(display_name, 1);
                }
            });
        });

        const sortedByCount = Array.from(tagByCount);
        sortedByCount.sort((a, b) => b[1] - a[1]);
        return sortedByCount;
    };

    const uniqueTags = aggregateTags(images);

    return (
        <div data-testid="gallery">
            {images.map((image) => {
                return (
                    <GalleryImage
                        image={image}
                        onClick={() => handleImageClick(image)}
                    />
                );
            })}
            {isOpen && <Modal image={selectedImage} onClose={closeModal} />}
        </div>
    );
};

export default Gallery;
