import React from 'react';


/**
 * Highlight text component
 *
 * @param {string} text 
 * @param {string} highlight
 * @return {JSX.Element}
 */
function HighlightText ({ text, highlight }) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <span>
      {parts.map((part, index) => (
        <span
          key={index.toString()}
          style={part.toLowerCase() === highlight.toLowerCase() ? { color: 'red' } : {} }
        >
          {part}
        </span>
      ))}
    </span>
  )
}

export default HighlightText;
