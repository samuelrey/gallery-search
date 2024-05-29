import React from "react";

const GalleryImage = ({ image, onClick }) => {
    const { src, alt, isVideo } = image;
    return !isVideo ? (
        <img
            data-testid="gallery-image"
            className="App-image"
            src={src}
            alt={alt}
            onClick={onClick}
            loading="lazy"
        />
    ) : (
        <video
            data-testid="gallery-image"
            className="App-image"
            src={src}
            alt={alt}
            onClick={onClick}
        />
    );
};

export default GalleryImage;
