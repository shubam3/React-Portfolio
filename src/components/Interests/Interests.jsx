import React, { useRef } from 'react';
import styles from "./Interests.module.css";
import { useTheme } from '../../context/ThemeContext';
import { getImageUrl } from "../../utils";

const Interests = () => {
  const { isDarkTheme } = useTheme();
  const sliderRef = useRef(null);
  
  const interests = [
    {
      title: "Travel",
      description: "Exploring diverse cultures and landscapes around the world. From bustling cities to serene natural wonders, each journey brings new perspectives and inspiration.",
      icon: "✈️",
      image: getImageUrl("about/me.jpeg")
    },
    {
      title: "Photography",
      description: "Capturing meaningful moments through the lens. I focus on composition, lighting, and storytelling to create images that evoke emotion and preserve memories.",
      icon: "📸",
      image: getImageUrl("about/travel.jpeg")
    },
    {
      title: "Technology",
      description: "Exploring cutting-edge innovations in AI, machine learning, and software development. I enjoy staying at the forefront of technological advancements and applying them to solve real-world problems.",
      icon: "💻",
      image: getImageUrl("about/tech.jpeg")
    },
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className={`${styles.container} ${!isDarkTheme ? styles.lightTheme : ''}`} id="interests">
      <div style={{ marginTop: '60px' }} />
      <h2 className={styles.title}>Interests & Hobbies</h2>
      <div style={{ marginBottom: '60px' }} />
      <div className={styles.sliderContainer}>
        <button 
          className={`${styles.navButton} ${styles.prevButton} ${!isDarkTheme ? styles.lightTheme : ''}`}
          onClick={() => scroll('left')}
        >
          &#8249;
        </button>
        <div className={styles.slider} ref={sliderRef}>
          {interests.map((interest, index) => (
            <div key={index} className={`${styles.interestCard} ${!isDarkTheme ? styles.lightTheme : ''}`}>
              <div className={styles.cardImage}>
                <img src={interest.image} alt={interest.title} />
                <div className={styles.overlay} />
              </div>
              <div className={`${styles.cardContent} ${!isDarkTheme ? styles.lightTheme : ''}`}>
                <h3>{interest.icon} {interest.title}</h3>
                <p>{interest.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button 
          className={`${styles.navButton} ${styles.nextButton} ${!isDarkTheme ? styles.lightTheme : ''}`}
          onClick={() => scroll('right')}
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Interests;
