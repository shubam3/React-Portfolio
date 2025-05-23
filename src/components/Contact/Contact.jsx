//import React from 'react'
import { getImageUrl } from "./../../utils";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div style={{ marginTop: '60px' }} />
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <div style={{ marginTop: '60px' }} />
          <h2>Contact</h2>
          <div style={{ marginBottom: '60px' }} />
          <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} />
            <a href="mailto:shubam@vt.edu">
               shubam@vt.edu
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
    </>
  );
};

export default Contact;
