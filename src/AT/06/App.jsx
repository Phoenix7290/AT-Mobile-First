import { useState } from 'react';
import PropTypes from 'prop-types';

const ShoppingList = ({ items }) => {
  const calculateTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="shopping-list">
      <h1>Lista de Compras</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="item">
            <div className="item-details">
              <span>{item.name}</span>
              <span>Preço Unitário: R${item.unitPrice.toFixed(2)}</span>
              <span>Quantidade: {item.quantity}</span>
              <span>Total: R${(item.unitPrice * item.quantity).toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>
      <h2>Total da Compra: R${calculateTotalPrice()}</h2>
    </div>
  );
};

function App() {
  const [items] = useState([
    { name: 'Arroz', unitPrice: 5.5, quantity: 2 },
    { name: 'Feijão', unitPrice: 7.0, quantity: 3 },
    { name: 'Azeite', unitPrice: 15.9, quantity: 1 },
  ]);

  return (
    <div className="App">
      <ShoppingList items={items} />
    </div>
  );
}

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      unitPrice: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default App;
