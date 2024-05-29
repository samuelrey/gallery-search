export const testImages = [
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

export const fetchImages = async (searchQuery) => {
    switch (searchQuery) {
        case "ninja turtles": {
            return testImages;
        }
        case "renaissance painters": {
            throw new Error("Mock error response.");
        }
        default: {
            return [];
        }
    }
};
