import React from 'react';


export default function RadiButton(props) {
    const {info, gender, handler} = props;
    return (
        info.map(function rButton(item) {
            const {name, value, id,} = item;
            return <div key={id}>
                <input type="radio" name={name} value={value} id={id} checked={gender === value} onChange={handler}/>
                <label htmlFor={id}>{id}</label>
            </div>

        })
    );
}
