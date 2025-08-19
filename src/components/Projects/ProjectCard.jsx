/* eslint-disable react/prop-types */
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({ title, imageSrc, description, skills, source, github }) => {
  const { isDarkTheme } = useTheme();
  
  return (
    <motion.div 
      className={`${styles.container} ${!isDarkTheme ? styles.lightTheme : ''}`}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={styles.imageContainer}>
        <img src={getImageUrl(imageSrc)} className={styles.image} alt={title} />
        <div className={styles.imageOverlay}>
          <div className={styles.overlayContent}>
            <motion.a
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.overlayButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye size={20} />
              Live Demo
            </motion.a>
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.overlayButton}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={20} />
                Code
              </motion.a>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <span key={id} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
        
        <div className={styles.links}>
          <motion.a 
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={16} />
            View Project
          </motion.a>
          
          {github && (
            <motion.a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.link} ${styles.githubLink}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              Source Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
