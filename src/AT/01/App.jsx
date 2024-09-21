import { IoLogoCodepen } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";

function App() {
  return (
    <header className="header">
      <div className="logo">
        <IoLogoCodepen className="logo-img"/>
      </div>
      <nav>
        <ul className={`menu`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Produtos</a></li>
          <li><a href="#">Serviços</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </nav>
      <IoPersonCircle className="person-icon"/>
    </header>
  );
}

export default App;
