import React, { useState } from 'react';
import logo from "./logo.svg";
import otters from "./otters.json";
import bulldogs from "./bulldogs.json"
import "./App.css";

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

const SearchForm = ({setImages}) => {
    const [searchQuery, setSearchQuery] = useState("");
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log(searchQuery)
    }

    const handleSubmit = (e) => {
        console.log(searchQuery)
        if (searchQuery === "otters") {
            setImages(otters)
        } else if (searchQuery === "bulldogs") {
            setImages(bulldogs)
        } else {
            setImages([])
        }
    }

    return <div>
        <input placeholder="Search for an image" onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
}

const ImageContainer = ({images}) => {
    return <div>
        {images.map((image) => {
            const { src, alt } = image;
            return <img className="App-image" src={src} alt={alt} />
        })}
    </div>
}

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [images, setImages] = useState([]);

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>Error</h2>
    }

    return (
        <div className="App">
            <Header />
            <SearchForm setImages={setImages}/>
            <ImageContainer images={images}/>
        </div>
    );
}

export default App;
