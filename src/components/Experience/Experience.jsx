import React from "react";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import { useTheme } from "../../context/ThemeContext";

const Experience = () => {
  const { isDarkTheme } = useTheme();
  
  return (
    <section id="experience" className={`${styles.container} ${!isDarkTheme ? styles.lightTheme : ''}`}>
      <div style={{ marginTop: '60px' }} />
      <h2 className={styles.title}>Experience</h2>
      <div style={{ marginBottom: '60px' }} />
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <div style={{ fontWeight: 'bold', marginBottom: 2 }}>
                    {`${historyItem.role}, ${historyItem.organisation} | ${historyItem.startdate} - ${historyItem.enddate}`}
                  </div>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
