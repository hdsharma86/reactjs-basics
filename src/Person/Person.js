import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div onClick={props.click} className="Person">
            <p>I am {props.name}! and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <p><input onChange={props.change} value={props.name} type="text" /></p>
        </div>
    )
}

export default person;