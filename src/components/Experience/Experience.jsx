import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { getImageUrl } from "../../utils";
import history from "../../data/history.json";
import styles from "./Experience.module.css";
import { useTheme } from "../../context/ThemeContext";

const Experience = () => {
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

  return (
    <section id="experience" className={styles.container}>
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <div className={styles.titleContainer}>
            <Briefcase size={40} className={styles.titleIcon} />
            <h2 className={styles.title}>Experience</h2>
          </div>
          <p className={styles.subtitle}>
            My professional journey and technical expertise
          </p>
        </motion.div>

        <motion.div className={styles.experienceSection} variants={itemVariants}>
          <h3 className={styles.sectionTitle}>
            <Briefcase size={24} />
            Work Experience
          </h3>
          <p className={styles.experienceDescription}>
            My professional journey spans across software development, cloud infrastructure, and research roles
          </p>
          <div className={styles.timeline}>
            {history.map((historyItem, id) => (
              <motion.div 
                key={id} 
                className={styles.timelineItem}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className={styles.timelineMarker}>
                  <div className={styles.markerDot} />
                  <div className={styles.markerLine} />
                </div>
                
                <div className={styles.timelineContent}>
                  <div className={styles.companyHeader}>
                    <img
                      src={getImageUrl(historyItem.imageSrc)}
                      alt={`${historyItem.organisation} Logo`}
                      className={styles.companyLogo}
                    />
                    <div className={styles.companyInfo}>
                      <h4 className={styles.role}>{historyItem.role}</h4>
                      <p className={styles.company}>{historyItem.organisation}</p>
                      <div className={styles.dateLocation}>
                        <span className={styles.date}>
                          <Calendar size={14} />
                          {historyItem.startdate} - {historyItem.enddate}
                        </span>
                        <span className={styles.location}>
                          <MapPin size={14} />
                          On-site
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className={styles.experienceList}>
                    {historyItem.experiences.map((experience, expId) => {
                      // Highlight keywords for impact
                      let exp = experience
                        .replace(/RESTful APIs?/gi, '<span class="'+styles.highlightKeyword+'">$&</span>')
                        .replace(/React-Redux|MySQL|Kubernetes|Docker|OpenStack|performance|scalability|resource allocation|frontend|backend|AI|machine learning|state efficiency|costs|load time|Spring Boot|AWS|Azure|Terraform/gi, '<span class="'+styles.highlightKeyword+'">$&</span>');
                      
                      return (
                        <li key={expId} className={styles.experienceItem}>
                          <span className={styles.bullet}>•</span>
                          <span dangerouslySetInnerHTML={{__html: exp}} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div className={styles.summary} variants={itemVariants}>
          <h3 className={styles.summaryTitle}>Professional Summary</h3>
          <p className={styles.summaryText}>
            With over 2 years of experience in software development, I've worked on diverse projects ranging from
            full-stack web applications to cloud infrastructure and machine learning solutions. My expertise spans
            multiple programming languages, cloud platforms, and modern development practices, enabling me to deliver
            scalable and efficient solutions for complex technical challenges.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
