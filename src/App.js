import React, { useState } from "react";
import logo from "./logo.svg";
import ImageContainer from "./ImageContainer";
import SearchForm from "./SearchForm";
import "./App.css";

const Header = () => {
  return (
    <header className="App-header">
      <h2>Fieldwire Image Search</h2>
      <img src={logo} className="App-logo" alt="logo" />
    </header>
  );
};

function App() {
  const [images, setImages] = useState([]);

  return (
    <div className="App">
      <Header />
      <SearchForm setImages={setImages} />
      <ImageContainer images={images} />
    </div>
  );
}

export default App;
