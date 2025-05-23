import React from 'react';
import styles from './Education.module.css';
import { useTheme } from '../../context/ThemeContext';

const Education = () => {
  const { isDarkTheme } = useTheme();
  
  const courses = [
    "Intermediate Data Structures & Algorithms",
    "Web Application Development",
    "Software Engineering and Design",
    "Machine Learning",
    "Natural Language Processing",
    "Cloud Computing"
  ];

  return (
    <div className={`${styles.container} ${!isDarkTheme ? styles.lightTheme : ''}`}>
      <div style={{ marginTop: '60px' }} />
      <h2>Education</h2>
      <div style={{ marginBottom: '60px' }} />
      <div className={styles.content}>
        <div className={styles.educationCard}>
          <h3>🎓 Virginia Tech</h3>
          <p className={styles.degree}>Maste's in Computer Science</p>
          <p className={styles.date}>2024 - 2026</p>
          <div className={styles.courseList}>
            {courses.map((course, index) => (
              <div key={index} className={styles.courseItem}>
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
