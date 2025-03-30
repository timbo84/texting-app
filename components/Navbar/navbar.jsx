'use client';

import { useState } from "react";
import styles from "./navbar.module.css";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <h1>Texting App</h1>
      <button onClick={toggleMenu}>{menuOpen ? "Close" : "Menu"}</button>
      {menuOpen && (
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/messages">Messages</a>
          </li>
          <li>
            <a href="/settings">Settings</a>
          </li>
          <li>
            <a href="/auth">signin</a>
          </li>
        </ul>
      )}
    </nav>
  );
}
