const RelatedProducts = () => {
  const products = [
    { name: 'Product 1', price: '$99.99', image: 'https://via.placeholder.com/300' },
    { name: 'Product 2', price: '$149.99', image: 'https://via.placeholder.com/300' },
    { name: 'Product 3', price: '$199.99', image: 'https://via.placeholder.com/300' },
  ];

  return (
    <div className="related-products">
      <h2>Related Products</h2>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="related-product">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
