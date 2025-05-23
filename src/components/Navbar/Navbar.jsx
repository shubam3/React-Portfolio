import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${!isDarkTheme ? styles.lightTheme : ''}`}>
      <a className={styles.title} href="/">
        <div className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.text}>SK</span>
          <span className={styles.slash}>/</span>
          <span className={styles.bracket}>&gt;</span>
        </div>
      </a>
      <div className={styles.menu}>
        <div className={styles.themeToggle} onClick={toggleTheme}>
          {isDarkTheme ? "🌞" : "🌙"}
        </div>
        <ul>
          {["about", "experience", "projects", "contact"].map((item) => (
            <li key={item}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
