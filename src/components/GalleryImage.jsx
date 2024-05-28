import React from "react";

const GalleryImage = ({ image, onClick }) => {
    const { src, alt, isVideo } = image;
    return !isVideo ? (
        <img
            className="App-image"
            src={src}
            alt={alt}
            onClick={onClick}
            loading="lazy"
        />
    ) : (
        <video className="App-image" src={src} alt={alt} onClick={onClick} />
    );
};

export default GalleryImage;
