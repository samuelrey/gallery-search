import React, { useState } from "react";
import logo from "./logo.svg";
import fetchImages from "./services/imgur";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import "./App.css";

const Header = () => {
    return (
        <header className="App-header">
            <h2>Image Search</h2>
        </header>
    );
};

const Footer = () => {
    return (
        <footer className="App-footer">
            <img src={logo} className="App-logo" alt="logo" />
        </footer>
    );
};

function App() {
    const [images, setImages] = useState([]);

    return (
        <body>
            <div className="App">
                <Header />
                <main className="main">
                    <SearchForm
                        fetchImages={fetchImages}
                        setImages={setImages}
                    />
                    <Gallery images={images} />
                </main>
                <Footer />
            </div>
        </body>
    );
}

export default App;
