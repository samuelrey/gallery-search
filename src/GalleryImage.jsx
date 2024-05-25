import React from "react";
import { useAppContext } from "./context";

const GalleryImage = ({ src, alt, setSelectedImage }) => {
    const { openModal } = useAppContext();

    const handleClick = () => {
        setSelectedImage({ src: src, alt: alt });
        openModal();
    };
    if (src.includes("mp4")) {
        return (
            <video
                className="App-image"
                src={src}
                alt={alt}
                onClick={openModal}
            />
        );
    }
    return (
        <img className="App-image" src={src} alt={alt} onClick={handleClick} />
    );
};

export default GalleryImage;
