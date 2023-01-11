import styles from './styles.module.css';

function App() {
  return (
    <div className="App">
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.button}>///</div>
                <div className={styles.menu}>"menu"</div>
                <div className={styles.device}>"device"</div>
                <div className={styles.steps}>"steps"</div>
            </div>

            <div className={styles.footnote}>
                Disclaimer: Some functions are only available on the Galaxy S22 Ultra.
            </div>
        </div>
    </div>
  );
}

export default App;
