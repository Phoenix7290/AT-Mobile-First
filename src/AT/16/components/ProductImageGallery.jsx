import { useState } from 'react';

const ProductImageGallery = () => {
  const [currentImage, setCurrentImage] = useState('https://th.bing.com/th/id/OIP.-zN-83xIZK-HfwP4Sv9fRwHaE7?rs=1&pid=ImgDetMain');
  const images = ['https://th.bing.com/th/id/OIP.-zN-83xIZK-HfwP4Sv9fRwHaE7?rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/OIP.KXVeLsF3TxJsa-YbxqyOzgHaEK?w=840&h=472&rs=1&pid=ImgDetMain', 'https://th.bing.com/th/id/OIP.Ho-U8oVlLvjX_x6_oYvdDAHaF3?w=580&h=460&rs=1&pid=ImgDetMain'];

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
