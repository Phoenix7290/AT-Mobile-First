import { useState } from 'react';
import ProductImageGallery from './ProductImageGallery';
import RelatedProducts from './RelatedProducts';
import Comments from './Comments';
import Menu from './Menu';
import './styles.css';

const ProductDetail = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`product-detail ${isDarkMode ? 'dark' : 'light'}`}>
      <Menu toggleDarkMode={toggleDarkMode} />
      <div className="product-container">
        <ProductImageGallery />
        <div className="product-info">
          <h1>Product Name</h1>
          <p className="price">$299.99</p>
          <p className="description">This is a detailed description of the product.</p>
          <ul className="specifications">
            <li>Specification 1</li>
            <li>Specification 2</li>
            <li>Specification 3</li>
          </ul>
        </div>
      </div>
      <RelatedProducts />
      <Comments />
    </div>
  );
};

export default ProductDetail;
