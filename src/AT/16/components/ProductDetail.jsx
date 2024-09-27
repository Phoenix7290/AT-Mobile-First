import { useState } from 'react';
import ProductImageGallery from './ProductImageGallery';
import SellerInfo from './SellerInfo';
import RelatedProducts from './RelatedProducts';
import Comments from './Comments';
import Questions from './Questions';
import Menu from './Menu';
import './styles.css';

const ProductDetail = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const product = {
    name: 'Alexa',
    price: '300R$',
    description: 'Assistente virtual inteligente da Amazon',
    rating: 4.5,
    images: [
      'https://th.bing.com/th/id/OIP.-zN-83xIZK-HfwP4Sv9fRwHaE7?rs=1&pid=ImgDetMain',
      'https://th.bing.com/th/id/OIP.KXVeLsF3TxJsa-YbxqyOzgHaEK?w=840&h=472&rs=1&pid=ImgDetMain',
    ],
  };

  const seller = {
    name: 'Loja Tech',
    email: 'contato@lojatech.com',
    phone: '11987654321',
    rating: 4.1,
  };

  const comments = [
    { name: 'João da Silva', date: '2024-08-30', comment: 'Alexa é boa', rating: 4 },
    { name: 'Jeniffer', date: '2024-08-29', comment: 'Salva tempo', rating: 5 },
  ];

  const questions = [
    { user: 'Carlos', date: '2024-08-28', question: 'Tem compatibilidade para português?', answer: 'Sim.' },
    { user: 'Maria', date: '2024-08-27', question: 'É compatível com Google Home?', answer: 'Não.' },
  ];

  return (
    <div className={`product-detail ${isDarkMode ? 'dark' : 'light'}`}>
      <Menu toggleDarkMode={toggleDarkMode} />
      <div className="product-container">
        <ProductImageGallery images={product.images} />
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
          <p className="description">{product.description}</p>
          <p className="rating">Nota: {product.rating} / 5</p>
        </div>
      </div>
      <SellerInfo seller={seller} />
      <Comments comments={comments} />
      <Questions questions={questions} />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
