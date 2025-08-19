import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen, Award } from 'lucide-react';
import styles from './Education.module.css';
import { useTheme } from '../../context/ThemeContext';

const Education = () => {
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

  const courses = [
    "Intermediate Data Structures & Algorithms",
    "Web Application Development",
    "Software Engineering and Design",
    "Machine Learning",
    "Natural Language Processing",
    "Cloud Computing",
    "Distributed Systems",
    "DevOps & CI/CD Practices"
  ];

  return (
    <section className={styles.container} id="education">
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <div className={styles.titleContainer}>
            <GraduationCap size={40} className={styles.titleIcon} />
            <h2 className={styles.title}>Education</h2>
          </div>
          <p className={styles.subtitle}>
            My academic journey and achievements
          </p>
        </motion.div>

        <motion.div className={styles.educationGrid} variants={itemVariants}>
          <motion.div 
            className={styles.educationCard}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.schoolIcon}>
                <GraduationCap size={32} />
              </div>
              <div className={styles.schoolInfo}>
                <h3 className={styles.schoolName}>Virginia Tech</h3>
                <p className={styles.degree}>Master's in Computer Science</p>
                <div className={styles.schoolDetails}>
                  <span className={styles.date}>
                    <Calendar size={14} />
                    2024 - 2026
                  </span>
                  <span className={styles.location}>
                    <MapPin size={14} />
                    Blacksburg, VA
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.cardContent}>
              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>
                  <BookOpen size={20} />
                  Key Courses
                </h4>
                <div className={styles.courseList}>
                  {courses.map((course, index) => (
                    <motion.div 
                      key={index} 
                      className={styles.courseItem}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className={styles.courseBullet}>•</span>
                      {course}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.statsCard}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
          >
            <h3 className={styles.statsTitle}>Academic Highlights</h3>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>4.0</div>
                <div className={styles.statLabel}>GPA</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>6</div>
                <div className={styles.statLabel}>Core Courses</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2</div>
                <div className={styles.statLabel}>Years</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>1</div>
                <div className={styles.statLabel}>Degree</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;
