import React, { useState } from 'react';
import logo from "./logo.svg";
import sample from "./sample.json";
import "./App.css";

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    
    const handleChange = (e) => {
        setSearchQuery(e.target.value)
        console.log(searchQuery)
    }

    const handleSubmit = (e) => {
        console.log(searchQuery)
    }

    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>Error</h2>
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    <input placeholder="Search for an image" onChange={handleChange}/>
                    <button onClick={handleSubmit}>Submit</button>
                </p>
                <img className="App-link" src={sample.link} alt="silly-otter" />
            </header>
        </div>
    );
}

export default App;
