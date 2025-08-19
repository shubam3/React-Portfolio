import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={`${styles.container} ${!isDarkTheme ? styles.lightTheme : ''}`}>
      <motion.div 
        className={`${styles.sliderContainer} ${isVisible ? styles.visible : ''}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About Me Section */}
        <motion.div className={styles.slide} variants={itemVariants}>
          <div className={styles.aboutMe}>
            <motion.h1 className={styles.title} variants={itemVariants}>
              Hi, I'm <span className={styles.highlight}>Shubam Khantwal</span>
            </motion.h1>
            
            <motion.div className={styles.subtitle} variants={itemVariants}>
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "Cloud & DevOps Engineer", 
                  "Machine Learning Enthusiast",
                  "Software Engineer"
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </motion.div>
            
            <motion.p className={styles.description} variants={itemVariants}>
              Passionate software engineer specializing in building scalable web applications, 
              cloud infrastructure, and AI/ML solutions. Experienced with modern technologies 
              including React, AWS, Docker, Kubernetes, and machine learning frameworks.
            </motion.p>
            
            <motion.div className={styles.buttonContainer} variants={itemVariants}>
              <motion.button 
                onClick={openResume} 
                className={styles.resumeBtn}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Download size={20} />
                Download Resume
              </motion.button>
              <motion.a 
                href="mailto:shubam@vt.edu" 
                className={styles.contactBtn}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Let's Connect
                <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div className={styles.slide} variants={imageVariants}>
          <div className={styles.imageContainer}>
            <motion.div 
              className={styles.imageWrapper}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={getImageUrl("hero/Pro.jpeg")} 
                className={styles.heroImg} 
                alt="Shubam's Profile" 
              />
              <div className={styles.imageBorder}></div>
              <div className={styles.imageGlow}></div>
            </motion.div>
            
            <motion.div 
              className={styles.socialIcons}
              variants={itemVariants}
            >
              <motion.a 
                href="https://github.com/shubam3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon} 
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Github size={24} />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/shubam-khantwal/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.socialIcon} 
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
