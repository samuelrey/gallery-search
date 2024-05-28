const fetchImages = async (searchQuery) => {
    switch (searchQuery) {
        case "ninja turtles": {
            return [
                {
                    src: "https://i.imgur.com/SevRXi6.jpeg",
                    alt: "turtle ninja",
                    isVideo: false,
                },
                {
                    src: "https://i.imgur.com/VVHRezI.mp4",
                    alt: "pizza delivery",
                    isVideo: true,
                },
            ];
        }
        case "renaissance painters": {
            throw new Error("Mock error response.");
        }
        default: {
            return [];
        }
    }
};

export default fetchImages;
