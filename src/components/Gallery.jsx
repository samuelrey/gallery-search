import React, { useState, useEffect } from "react";
import GalleryImage from "./GalleryImage";
import Modal from "./Modal";
import useModal from "../hooks/useModal";

const getTagsSortedByOccurence = (images) => {
    const tagByCount = new Map();

    images.forEach(({ tags }) => {
        tags.forEach(({ display_name }) => {
            if (tagByCount.has(display_name)) {
                tagByCount.set(display_name, tagByCount.get(display_name) + 1);
            } else {
                tagByCount.set(display_name, 1);
            }
        });
    });

    return [...tagByCount.entries()].sort((a, b) => b[1] - a[1]);
};

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [tags, setTags] = useState([]);
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        setTags(getTagsSortedByOccurence(images));
    }, [images]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        openModal();
    };

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
