import React, { useState } from "react";

const Loading = () => {
    return (
        <div data-testid="search-loading" className="search-loading">
            <h2>Loading...</h2>
        </div>
    );
};

const Error = ({ error }) => {
    return (
        <div data-testid="search-error" className="search-error">
            <h2>Oops, there was an issue</h2>
            <p>{error}</p>
        </div>
    );
};

const SearchForm = ({ fetchImages, setImages }) => {
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
        <div data-testid="search-form" className="search-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                    data-testid="search-input"
                    className="search-input"
                    placeholder="Search..."
                    onChange={handleChange}
                />
                <button
                    data-testid="search-button"
                    className="search-button"
                    type="submit"
                >
                    Search
                </button>
            </form>
            {loading && <Loading />}
            {error && <Error error={error} />}
        </div>
    );
};

export default SearchForm;
