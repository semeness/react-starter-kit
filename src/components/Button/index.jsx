import React from 'react';

function clickHandler(data) {
    return function() {
        console.log("Works", data.name);
    }
}

export default function Button(props) {
    const {data, text, onClick} = props;
    return (
            <button onClick={onClick}>
                {text}
            </button>
        );
}


