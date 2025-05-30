/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { getImageUrl } from "./../../utils";
import styles from "./About.module.css";
import { useTheme } from "../../context/ThemeContext";
import './AboutCustom.css';

const About = () => {
  const { isDarkTheme } = useTheme();
  
  // Apply direct DOM manipulation to fix the About section in white theme
  React.useEffect(() => {
    const aboutItems = document.querySelectorAll('[class*="aboutItem"]');
    
    if (!isDarkTheme) {
      // Apply light theme styles with pure white background
      aboutItems.forEach(item => {
        item.style.backgroundColor = '#ffffff';
        item.style.background = '#ffffff';
        item.style.borderColor = '#e0e0e0';
        item.style.color = '#1c1c27';
        
        // Apply styles to child elements
        const titles = item.querySelectorAll('h3');
        const descriptions = item.querySelectorAll('p');
        
        titles.forEach(title => {
          title.style.color = '#1c1c27';
        });
        
        descriptions.forEach(desc => {
          desc.style.color = '#1c1c27';
        });
      });
    } else {
      // Reset styles when in dark theme
      aboutItems.forEach(item => {
        item.style.backgroundColor = '';
        item.style.background = '';
        item.style.borderColor = '';
        item.style.color = '';
        
        // Reset child element styles
        const titles = item.querySelectorAll('h3');
        const descriptions = item.querySelectorAll('p');
        
        titles.forEach(title => {
          title.style.color = '';
        });
        
        descriptions.forEach(desc => {
          desc.style.color = '';
        });
      });
    }
  }, [isDarkTheme]); // Re-apply whenever theme changes
  
  return (
    <section className={styles.container} id="about">
      <div style={{ marginTop: '60px' }} />
      <h2 className={styles.title}>About</h2>
      <div style={{ marginBottom: '60px' }} />
      <p className={styles.intro}>Here's what I do best:</p>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <span className={styles.itemIcon}>🖥️</span>
            <div>
              <h3 className={styles.itemTitle}>Frontend Developer</h3>
              <p className={styles.itemDescription}>
                Specialized in developing <span className={styles.highlightKeyword}>responsive</span>, <span className={styles.highlightKeyword}>performance-optimized</span> websites that deliver exceptional user experiences and follow modern design principles.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <span className={styles.itemIcon}>🗄️</span>
            <div>
              <h3 className={styles.itemTitle}>Backend Developer</h3>
              <p className={styles.itemDescription}>
                Experienced in designing and implementing <span className={styles.highlightKeyword}>high-performance backend systems</span> and <span className={styles.highlightKeyword}>RESTful APIs</span>, with a focus on scalability and security.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <span className={styles.itemIcon}>🤖</span>
            <div>
              <h3 className={styles.itemTitle}>Machine Learning & AI Enthusiast</h3>
              <p className={styles.itemDescription}>
                Proficient in developing and deploying <span className={styles.highlightKeyword}>end-to-end machine learning solutions</span>, with experience in various <span className={styles.highlightKeyword}>AI frameworks</span> and <span className={styles.highlightKeyword}>data analysis techniques</span>.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
