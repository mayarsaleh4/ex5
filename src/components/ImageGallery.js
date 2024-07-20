import React, { useState } from 'react';
import LargeImage from './LargeImage';
import Thumbnail from './Thumbnail';

const images = [
  { id: 12, large: 'https://picsum.photos/id/12/350/350', thumb: 'https://picsum.photos/id/12/50/50' },
  { id: 13, large: 'https://picsum.photos/id/13/350/350', thumb: 'https://picsum.photos/id/13/50/50' },
  { id: 14, large: 'https://picsum.photos/id/14/350/350', thumb: 'https://picsum.photos/id/14/50/50' },
  // Add more images here
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(images[0].large);

  return (
    <div className="gallery">
      <LargeImage src={selectedImage} />
      <div className="thumbnails">
        {images.map((image) => (
          <Thumbnail
            key={image.id}
            src={image.thumb}
            onClick={() => setSelectedImage(image.large)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
