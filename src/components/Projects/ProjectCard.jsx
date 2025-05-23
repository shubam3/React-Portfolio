/* eslint-disable react/prop-types */
import React from 'react';
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { useTheme } from '../../context/ThemeContext';

const ProjectCard = ({
  project: { title, imageSrc, description, skills, source },
}) => {
  const { isDarkTheme } = useTheme();
  
  return (
    <div className={`${styles.container} ${!isDarkTheme ? styles.lightTheme : ''}`}>
      <img src={getImageUrl(imageSrc)} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={`${styles.skill} ${!isDarkTheme ? styles.lightTheme : ''}`}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          <a 
            href={source}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${!isDarkTheme ? styles.lightTheme : ''}`}
          >
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
