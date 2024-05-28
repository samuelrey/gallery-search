import React, { useState } from "react";
import fetchImages from "../services/imgur";

const SearchForm = ({ setImages }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(false);
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
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Search for an image"
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {loading && <h2>Loading...</h2>}
            {error && (
                <div>
                    <h2>Oops, there was an issue</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default SearchForm;
