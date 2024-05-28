import React, { useState } from "react";
import fetchImages from "../services/imgur";

const Loading = () => {
    return (
        <div className="search-loading">
            <h2>Loading...</h2>
        </div>
    );
};

const Error = ({ error }) => {
    return (
        <div className="search-error">
            <h2>Oops, there was an issue</h2>
            <p>{error}</p>
        </div>
    );
};

const SearchForm = ({ setImages }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        try {
            const images = await fetchImages(searchQuery);
            setImages(images);
        } catch (error) {
            setError("Error searching images: " + error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="search-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    className="search-input"
                    placeholder="Search..."
                    onChange={handleChange}
                />
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            {loading && <Loading />}
            {error && <Error error={error} />}
        </div>
    );
};

export default SearchForm;
