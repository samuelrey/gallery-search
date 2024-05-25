import React from "react";
import { useAppContext } from "./context";

const FieldwireImage = ({src, alt}) => {
    const { openModal } = useAppContext()

    if (src.includes("mp4")) {
        return <video className="App-image" src={src} alt={alt} onClick={openModal}/>
    }
    return <img className="App-image" src={src} alt={alt} onClick={openModal}/>
}

export default FieldwireImage