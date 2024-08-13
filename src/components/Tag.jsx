/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Tag.css';

const Tag = (props) => {
    return (
        <button className='tag'> {props.tagName} </button>
    )
} 

export default Tag