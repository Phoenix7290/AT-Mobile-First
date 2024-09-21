import { useState } from "react";
import { IoLogoCodepen } from "react-icons/io";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <IoLogoCodepen className="logo-img"/>
      </div>
      <nav className="nav">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default App;
