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

    return [...tagByCount.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([display_name, count]) => {
            return { display_name: display_name, count: count };
        });
};

const filterImagesByTag = (images, selectedTag) => {
    return images.filter(({ tags }) =>
        tags.some(({ display_name }) => display_name === selectedTag)
    );
};

const Gallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [tags, setTags] = useState([]);
    const [filteredImages, setFilteredImages] = useState([]);
    const [selectedTag, setSelectedTag] = useState("");
    const { isOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        setTags(getTagsSortedByOccurence(images));
        setFilteredImages(images);
    }, [images]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        openModal();
    };

    const handleTagClick = (display_name) => {
        if (display_name === selectedTag) {
            setFilteredImages(images);
            setSelectedTag("");
        } else {
            setFilteredImages(filterImagesByTag(images, display_name));
            setSelectedTag(display_name);
        }
    };

    return (
        <div data-testid="gallery">
            <div>
                {tags.map(({ display_name, count }) => {
                    return (
                        <button onClick={() => handleTagClick(display_name)}>
                            {display_name}: {count}
                        </button>
                    );
                })}
            </div>
            <div>
                {filteredImages.map((image) => {
                    return (
                        <GalleryImage
                            image={image}
                            onClick={() => handleImageClick(image)}
                        />
                    );
                })}
            </div>
            {isOpen && <Modal image={selectedImage} onClose={closeModal} />}
        </div>
    );
};

export default Gallery;
