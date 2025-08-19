import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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

  const navItems = [
    { name: "about", href: "#about" },
    { name: "experience", href: "#experience" },
    { name: "projects", href: "#projects" },
    { name: "contact", href: "#contact" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.nav 
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${!isDarkTheme ? styles.lightTheme : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.a 
        className={styles.title} 
        href="/"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className={styles.logo}>
          <span className={styles.bracket}>&lt;</span>
          <span className={styles.text}>SK</span>
          <span className={styles.slash}>/</span>
          <span className={styles.bracket}>&gt;</span>
        </div>
      </motion.a>
      
      <div className={styles.menu}>
        <motion.div 
          className={styles.themeToggle} 
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
        </motion.div>
        
        <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={item.href}
                className={styles.navLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
        
        <motion.button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul className={styles.mobileNavList}>
          {navItems.map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <a 
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
