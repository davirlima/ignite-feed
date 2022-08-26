import styles from "./Footer.module.css";
import mySymbol from "../assets/mySymbol.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/davirlima" target="_blank">
        <img src={mySymbol} />
      </a>
    </footer>
  );
}
