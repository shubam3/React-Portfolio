import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, Plane, Code, ArrowLeft, ArrowRight } from 'lucide-react';
import styles from "./Interests.module.css";
import { useTheme } from '../../context/ThemeContext';
import { getImageUrl } from "../../utils";

const Interests = () => {
  const { isDarkTheme } = useTheme();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const interests = [
    {
      title: "Travel",
      description: "Exploring diverse cultures and landscapes around the world. From bustling cities to serene natural wonders, each journey brings new perspectives and inspiration.",
      icon: <Plane size={32} />,
      image: getImageUrl("about/travel.jpeg"),
      color: "var(--color-primary)"
    },
    {
      title: "Photography",
      description: "Capturing meaningful moments through the lens. I focus on composition, lighting, and storytelling to create images that evoke emotion and preserve memories.",
      icon: <Camera size={32} />,
      image: getImageUrl("about/me.jpeg"),
      color: "var(--color-secondary)"
    },
    {
      title: "Technology",
      description: "Exploring cutting-edge innovations in AI, machine learning, and software development. I enjoy staying at the forefront of technological advancements and applying them to solve real-world problems.",
      icon: <Code size={32} />,
      image: getImageUrl("about/tech.jpeg"),
      color: "var(--color-accent)"
    },
  ];

  return (
    <section className={styles.container} id="interests">
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <div className={styles.titleContainer}>
            <Heart size={40} className={styles.titleIcon} />
            <h2 className={styles.title}>Interests & Hobbies</h2>
          </div>
          <p className={styles.subtitle}>
            Beyond coding, here's what keeps me inspired and balanced
          </p>
        </motion.div>

        <motion.div className={styles.interestsGrid} variants={itemVariants}>
          {interests.map((interest, index) => (
            <motion.div 
              key={index}
              className={styles.interestCard}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className={styles.cardImage}>
                <img src={interest.image} alt={interest.title} />
                <div className={styles.imageOverlay}>
                  <div 
                    className={styles.iconContainer}
                    style={{ backgroundColor: `${interest.color}20` }}
                  >
                    <div style={{ color: interest.color }}>
                      {interest.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.interestTitle}>{interest.title}</h3>
                <p className={styles.interestDescription}>{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.cta} variants={itemVariants}>
          <p className={styles.ctaText}>
            Want to know more about my interests or share similar passions?
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Connect
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Interests;
