import Styles from './main.module.css';

function App() {
  return (
    <div className={Styles.container}>
      <header>Header</header>
      <main><span>☰</span> Global Menu</main>
      <article>Context Menu</article>
      <section>Main Content</section>
      <aside>Ads</aside>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
