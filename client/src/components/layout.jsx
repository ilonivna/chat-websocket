import Header from "./header.jsx";
import Footer from "./footer.jsx";
import styles from './Layout.module.css';
import TotalClients from "./totalClients.jsx"

export default function Layout({ children, totalClients }) {
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
      <div><TotalClients data={totalClients}/></div>
      
    </div>
  );
}


