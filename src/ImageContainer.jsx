import React from "react";

const ImageContainer = ({images}) => {
    return <div>
        {images.map((image) => {
            const { src, alt } = image;
            if (src.includes("mp4")) {
                return <video className="App-image" src={src} alt={alt} />
            }
            return <img className="App-image" src={src} alt={alt} />
        })}
    </div>
}

export default ImageContainer