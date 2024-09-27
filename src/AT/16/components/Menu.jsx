import { useState } from 'react';

import PropTypes from 'prop-types';

const Menu = ({ toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="menu">
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>
      <ul className={`menu-list ${isMenuOpen ? 'open' : 'closed'}`}>
        <li>Home</li>
        <li>Loja</li>
        <li>Sobre</li>
        <li>Contato</li>
        <li><button onClick={toggleDarkMode}>Alterar Tema</button></li>
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Menu;
