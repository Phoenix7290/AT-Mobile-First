import { MdForum } from "react-icons/md";
import PropTypes from "prop-types";

export default function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <header>
      <MdForum style={{ fontSize: "30px" }} />
      <nav className="menu">
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul className={`menu-list ${isMenuOpen ? "open" : "closed"}`}>
          <li>Perfil</li>
          <li>Fotos</li>
          <li>Amigos</li>
          <li>Sugestões</li>
        </ul>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
};
