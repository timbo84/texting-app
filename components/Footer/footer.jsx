import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} JYT Software. All rights reserved.
      </p>
    </footer>
  );
}
