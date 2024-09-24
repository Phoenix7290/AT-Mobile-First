import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1>Fórum de Discussões</h1>
      <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <ul>
          <li>Tópicos Recentes</li>
          <li>Mais Respondidos</li>
          <li>Mais Curtidos</li>
          <li>Meus Tópicos</li>
          <li>Perfil</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
