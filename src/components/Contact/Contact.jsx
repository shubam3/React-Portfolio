//import React from 'react'
import { getImageUrl } from "./../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} />
          <a href="mailto:shubamkhantwal18@gmail.com">
            shubamkhantwal18@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} />
          <a href="https://www.linkedin.com/in/shubam-khantwal-86410519b/?originalSubdomain=in">
            linkedin.com/shubam3
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} />
          <a href="https://www.github.com/shubam3">github.com/shubam3</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
