import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { IoPersonCircle } from "react-icons/io5";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="menu">
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="icon"><RiMenuLine /></span>
      </div>
      <div className="brand">Brand</div>
      
      <ul className={`menu-list ${isOpen ? "open" : "closed"}`}>
        <li>Opção 1</li>
        <li>Opção 2</li>
        <li>Opção 3</li>
        <li>Opção 4</li>
      </ul>

      <div className="user-icon" onClick={toggleMenu}>
        <span className="icon"><IoPersonCircle /></span>
      </div>
    </nav>
  );
}

export default Menu;
