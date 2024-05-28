import React, { useState } from "react";
import fetchImages from "../services/imgur";

const SearchForm = ({ setImages }) => {
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = async () => {
        setLoading(true)
        try {
            const images = await fetchImages(searchQuery);
            setImages(images)
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Search for an image" onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default SearchForm;
