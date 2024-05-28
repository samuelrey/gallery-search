const galleryUrl = "https://api.imgur.com/3/gallery/search/";

const buildSearchUrl = (query) => {
    const parametrizedQuery = `&q=${encodeURIComponent(query)}`;
    return `${galleryUrl}?${parametrizedQuery}`;
};

const transformImages = (imgurImages) => {
    return imgurImages
        .map((image) => {
            let link;
            const { is_album, images, title } = image;

            if (is_album) {
                try {
                    if (images[0].type === "video/mp4") {
                        link = images[0].mp4;
                    } else {
                        link = images[0].link;
                    }
                } catch (error) {
                    console.log("Could not determine media type.");
                    return null;
                }
            } else {
                link = image.link;
            }

            return { src: link, alt: title };
        })
        .filter((image) => image);
};

const fetchImages = async (searchQuery) => {
    // do not call API for empty strings
    if (searchQuery.trim().length === 0) {
        return [];
    }

    const preparedUrl = buildSearchUrl(searchQuery);
    const headers = {
        Authorization: `Client-ID ${process.env.REACT_APP_IMGUR_API_KEY}`,
    };
    try {
        const response = await fetch(preparedUrl, {
            headers: headers,
        });
        const responseJson = await response.json();
        if (!responseJson.success) {
            throw new Error(responseJson.data.error);
        }

        const images = transformImages(responseJson.data);
        return images;
    } catch (error) {
        console.log("Imgur API error: ", error);
        throw error;
    }
};

export default fetchImages;
