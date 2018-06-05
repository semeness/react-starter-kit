import React from 'react';


export default function Button(props) {
    const {data, text, onClick} = props;
    return (
            <button onClick={onClick}>
                {text}
            </button>
        );
}


