import React, { useState } from "react";

const galleryUrl = "https://api.imgur.com/3/gallery/search/";

const buildSearchUrl = (query) => {
    const parametrizedQuery = `&q=${query}`;
    return `${galleryUrl}?${parametrizedQuery}`;
};

const transformImages = (imgurImages) => {
    return imgurImages.map((image) => {
        let link;
        const { is_album, images, title } = image;

        if (is_album) {
            if (images[0].type === "video/mp4") {
                link = images[0].mp4;
            } else {
                link = images[0].link;
            }
        } else {
            link = image.link;
        }

        return { src: link, alt: title };
    });
};

const SearchForm = ({ setImages }) => {
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        fetchImages();
    };

    const fetchImages = async () => {
        // do not call API for empty strings
        if (searchQuery.trim().length === 0) {
            return [];
        }

        setLoading(true);
        const preparedUrl = buildSearchUrl(searchQuery);
        const headers = {
            Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_API_KEY}`,
        };
        try {
            const response = await fetch(preparedUrl, {
                headers: headers,
            });
            const imgurImages = await response.json();
            const images = transformImages(imgurImages.data);
            setImages(images);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
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
