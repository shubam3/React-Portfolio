//import React from 'react'

import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} />
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
                <img src={getImageUrl(historyItem.imageSrc)} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startdate}-${historyItem.enddate}`}</p>
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
