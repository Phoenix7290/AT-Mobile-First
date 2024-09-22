import { useState } from "react";
import Styles from "./main.module.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={Styles.container}>
      <header>Header</header>
      <main>
        <button onClick={toggleMenu}>☰</button>
        <p>Global Menu</p>
        <ul className={`${Styles.menuList} ${isMenuOpen ? Styles.open : Styles.closed}`}>
          <li>Context Menu</li>
          <li>Main Content</li>
          <li>Footer</li>
        </ul>
      </main>
      <article>Context Menu</article>
      <section>Main Content</section>
      <aside>Ads</aside>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
