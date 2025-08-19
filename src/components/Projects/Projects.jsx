import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink, Github } from 'lucide-react';
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={styles.container} id="projects">
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <div className={styles.titleContainer}>
            <FolderOpen size={40} className={styles.titleIcon} />
            <h2 className={styles.title}>Featured Projects</h2>
          </div>
          <p className={styles.subtitle}>
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div className={styles.projectsGrid} variants={itemVariants}>
          {projects.map((project, id) => (
            <motion.div
              key={id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.cta} variants={itemVariants}>
          <p className={styles.ctaText}>
            Want to see more of my work or collaborate on a project?
          </p>
          <motion.a
            href="#contact"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Let's Build Something Together
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
