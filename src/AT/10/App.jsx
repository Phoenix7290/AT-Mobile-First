import { useState } from "react";
import { RiMenuLine } from "react-icons/ri";
import { IoPersonCircle } from "react-icons/io5";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="menu">
        <button className="menu-toggle" onClick={toggleMenu}>
          <RiMenuLine />
        </button>
        <div className="brand">Brand</div>
        <div className="user-icon">
          <span className="icon"><IoPersonCircle /></span>
        </div>

      </nav>
      <hgroup>
        <ul className={`menu-list ${isOpen ? "open" : "closed"}`}>
          <li>Opção 1</li>
          <li>Opção 2</li>
          <li>Opção 3</li>
          <li>Opção 4</li>
        </ul>
      </hgroup>
    </>
  );
}

export default Menu;
