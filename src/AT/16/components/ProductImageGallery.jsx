import { useState } from 'react';

const ProductImageGallery = () => {
  const [currentImage, setCurrentImage] = useState('https://placehold.co/200');
  const images = ['https://placehold.co/200', 'https://placehold.co/150', 'https://placehold.co/100'];

  return (
    <div className="image-gallery">
      <img src={currentImage} alt="Product" className="main-image" />
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${currentImage === image ? 'selected' : ''}`}
            onClick={() => setCurrentImage(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
