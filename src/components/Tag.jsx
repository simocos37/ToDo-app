// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Tag.css';

// eslint-disable-next-line react/prop-types
const Tag = ({ tagName, selectTag, selected }) => { // tagName and selectTag are props passed to the Tag component, which are destructured in the function signature
    const tagStyle = {
        HTML: {backgroundColor: '#fda821 '},
        CSS: {backgroundColor: '#15d4c8'},
        JavaScript: {backgroundColor: '#ffd12c'},
        React: {backgroundColor: '#4dcafc'},
        default: {backgroundColor: '#f5f5f5'},
    }
    
    return (
        <button 
            type='button' 
            className='tag' 
            style={selected ? tagStyle[tagName] : tagStyle.default}
            onClick={() => selectTag(tagName)}> 
            {tagName} 
        </button>
    )
} 

export default Tag