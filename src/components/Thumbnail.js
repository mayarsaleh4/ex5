import React from 'react';

function Thumbnail({ src, onClick }) {
  return (
    <img
      src={src}
      alt="Thumbnail"
      className="thumbnail"
      onClick={onClick}
      style={{ cursor: 'pointer', margin: '5px' }}
    />
  );
}

export default Thumbnail;
