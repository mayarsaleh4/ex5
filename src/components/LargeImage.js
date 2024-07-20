import React from 'react';

function LargeImage({ src }) {
  return (
    <div className="large-image">
      <img src={src} alt="Large view" />
    </div>
  );
}

export default LargeImage;
