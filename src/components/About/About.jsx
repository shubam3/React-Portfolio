/* eslint-disable react/no-unescaped-entities */
//import React from 'react'
import { getImageUrl } from "./../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} />
            <div className={styles.aboutItemtext}>
              <h3>Frontend developer</h3>
              <p>
                I'm a frontend developer with specialize in building responsive
                and optimized websites{" "}
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} />
            <div className={styles.aboutItemtext}>
              <h3>Backend developer</h3>
              <p>
                I have an experience in developing fast and optimized back-end
                system and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} />
            <div className={styles.aboutItemtext}>
              <h3>UI designer</h3>
              <p>
                I have designed multiple landing pages and have system as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
