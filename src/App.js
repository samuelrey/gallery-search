import React, { useState } from 'react';
import logo from "./logo.svg";
import "./App.css";

const Header = () => {
    return (
        <header className="App-header">
            <h2>Fieldwire Image Search</h2>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}

const galleryUrl = "https://api.imgur.com/3/gallery/search/"

const buildSearchUrl = (query) => {
    const parametrizedQuery = `&q=${query}`
    return `${galleryUrl}?${parametrizedQuery}`
}

const SearchForm = ({setImages}) => {
    const [searchQuery, setSearchQuery] = useState("");
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSubmit = (e) => {
        fetchImages()
    }

    const fetchImages = async () => {
        // do not call API for empty strings
        if (searchQuery.trim().length === 0) {
            return []
        }

        const preparedUrl = buildSearchUrl(searchQuery)
        const headers = {
            'Authorization': `Client-ID ${process.env.REACT_APP_IMGUR_API_KEY}`
        }
        try {
            const response = await fetch(preparedUrl, {
                headers: headers,
            })
            const data = await response.json()
            setImages(data.data)
        } catch (error) {
            console.log(error)
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
            const { link, title } = image;
            return <img className="App-image" src={link} alt={title} />
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
