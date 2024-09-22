import Styles from "./main.module.css";

export default function App() {
  return (
    <div className={Styles.container}>
      <header>Header</header>
      <main>Global Menu</main>
      <article>Context Menu</article>
      <section>Main Content</section>
      <aside>Ads</aside>
      <footer>Footer</footer>
    </div>
  );
}
