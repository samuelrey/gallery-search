import React, { useState } from "react";
import GalleryImage from "./GalleryImage";
import Modal from "./Modal";

const ImageContainer = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

    return (
        <div>
            {images.map((image) => {
                return (
                    <GalleryImage
                        {...image}
                        setSelectedImage={setSelectedImage}
                    />
                );
            })}
            <Modal image={selectedImage} />
        </div>
    );
};

export default ImageContainer;
