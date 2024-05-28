import React, { useState } from "react";
import logo from "./logo.svg";
import ImageContainer from "./components/ImageContainer";
import SearchForm from "./components/SearchForm";
import "./App.css";

const Header = () => {
    return (
        <header className="App-header">
            <h2>Fieldwire Image Search</h2>
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
                    <SearchForm setImages={setImages} />
                    <ImageContainer images={images} />
                </main>
                <Footer />
            </div>
        </body>
    );
}

export default App;
