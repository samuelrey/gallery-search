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
        <div>
            <input placeholder="Search for an image" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default SearchForm;
