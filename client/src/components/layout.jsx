import Header from "./header.jsx";
import Footer from "./footer.jsx";
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}


