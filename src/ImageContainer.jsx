import React, { useState } from "react";
import FieldwireImage from "./FieldwireImage";
import Modal from "./Modal";

const ImageContainer = ({images}) => {
    const [selectedImage, setSelectedImage] = useState({src: "", alt: ""})

    return <div>
        {images.map((image) => {
            return <FieldwireImage {...image} />
        })}
        <Modal image={selectedImage} />
    </div>
}

export default ImageContainer