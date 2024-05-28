import React from "react";

const GalleryImage = ({ src, alt, onClick }) => {
    if (src.includes("mp4")) {
        return (
            <video
                className="App-image"
                src={src}
                alt={alt}
                onClick={onClick}
            />
        );
    }
    return (
        <img
            className="App-image"
            src={src}
            alt={alt}
            onClick={onClick}
            loading="lazy"
        />
    );
};

export default GalleryImage;
