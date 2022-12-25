import styles from "./App.module.css"
import Export from "./components/Export";
import Header from "./components/Header";
import Import from "./components/Import";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
          <Header />
      </div>
      <div className={styles.main}>
          <Export />
          <Import />
      </div>
    </div>
  );
}

export default App;
