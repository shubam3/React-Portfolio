import React, { useEffect, useState } from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { useTheme } from "../../context/ThemeContext";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkTheme } = useTheme();
  
  // Animation on load
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const openResume = () => {
    window.open('https://drive.google.com/file/d/1R4ZE__NhQr1FMkrVnkcb82aGS5F3fsjh/view', '_blank');
  };

  return (
    <section className={`${styles.container} ${!isDarkTheme ? styles.lightTheme : ''}`}>
      <div className={`${styles.sliderContainer} ${isVisible ? styles.visible : ''}`}>
        {/* About Me Section */}
        <div className={styles.slide}>
          <div className={styles.aboutMe}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Hi, I'm <span className={styles.highlight}>Shubam</span>
                <span role="img" aria-label="waving hand" className={styles.waveEmoji}>👋</span>
              </h1>
              <div className={styles.subtitle}>
                <span className={styles.subtitleText}>Software Developer</span>
                <span className={styles.subtitleDot}>•</span>
                <span className={styles.subtitleText}>Problem Solver</span>
                <span className={styles.subtitleDot}>•</span>
                <span className={styles.subtitleText}>Tech Enthusiast</span>
              </div>
            </div>
            <div className={styles.description}>
              <p>
                I am currently a student at Virginia Tech with solid experience as a software developer. Want to learn more about my journey? Download my resume below!
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <button onClick={openResume} className={styles.resumeBtn}>
                <img src={getImageUrl("nav/resume.png")} alt="Resume" className={styles.resumeIcon} />
                Resume
              </button>
              <a href="mailto:shubam@vt.edu" className={styles.contactBtn}>
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className={styles.slide}>
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img 
                src={getImageUrl("hero/Pro.jpeg")} 
                className={styles.heroImg} 
                alt="Shubam's Profile" 
              />
              <div className={styles.imageBorder}></div>
            </div>
            <div className={styles.socialIcons}>
              <a href="https://github.com/shubam3" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="GitHub Profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isDarkTheme ? "white" : "#333333"} width="30" height="30">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/shubam-khantwal/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn Profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={isDarkTheme ? "white" : "#333333"} width="30" height="30">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
