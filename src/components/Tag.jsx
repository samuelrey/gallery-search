import React from "react";

const Tag = ({ tag, onClick }) => {
    const { display_name, count } = tag;
    return (
        <button onClick={onClick}>
            {display_name}: {count}
        </button>
    );
};

export default Tag;
