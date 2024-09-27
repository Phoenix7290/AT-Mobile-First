const RelatedProducts = () => {
  const products = [
    { name: 'Notebook', price: '5.200,00 R$', image: 'https://th.bing.com/th/id/OIP.zZ4RPIhFjAPw04krOP9-tQHaFj?rs=1&pid=ImgDetMain' },
    { name: 'PlayStation 5', price: '3.000,00 R$', image: 'https://th.bing.com/th/id/OIP.-nqWnpqBEhDGTaM3-oOFvQHaFW?rs=1&pid=ImgDetMain' },
    { name: 'smartphone', price: '4.500,00 R$', image: 'https://th.bing.com/th/id/R.5dc03fdb775ac8eeba00d5ff063f3e84?rik=AFxbUbOW5rdyWw&pid=ImgRaw&r=0' },
  ];

  return (
    <div className="related-products">
      <h2>Produtos relacionados</h2>
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
