/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Brain, Zap, Shield, Users, Cloud, Server, Globe, Rocket } from "lucide-react";
import styles from "./About.module.css";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
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

  const aboutItems = [
    {
      icon: <Code size={24} />,
      title: "Full-Stack Development",
      description: "Building scalable web applications with modern frameworks and best practices.",
      color: "var(--color-primary)"
    },
    {
      icon: <Cloud size={24} />,
      title: "Cloud & DevOps",
      description: "Designing and implementing cloud-native solutions with CI/CD pipelines.",
      color: "var(--color-secondary)"
    },
    {
      icon: <Database size={24} />,
      title: "Database Design",
      description: "Creating efficient database architectures and optimizing query performance.",
      color: "var(--color-accent)"
    },
    {
      icon: <Brain size={24} />,
      title: "Machine Learning",
      description: "Developing AI/ML solutions for real-world problems and automation.",
      color: "var(--color-primary)"
    },
    {
      icon: <Server size={24} />,
      title: "Infrastructure as Code",
      description: "Managing infrastructure using Terraform, Docker, and Kubernetes.",
      color: "var(--color-secondary)"
    },
    {
      icon: <Shield size={24} />,
      title: "Security & Performance",
      description: "Implementing security best practices and optimizing application performance.",
      color: "var(--color-accent)"
    }
  ];

  const stats = [
    { number: "2+", label: "Years Experience", icon: <Rocket size={20} /> },
    { number: "15+", label: "Projects Completed", icon: <Code size={20} /> },
    { number: "8+", label: "Technologies Mastered", icon: <Globe size={20} /> },
    { number: "100%", label: "Client Satisfaction", icon: <Users size={20} /> }
  ];

  const skillCategories = [
    // {
    //   title: "Frontend",
    //   skills: ["React", "JavaScript", "TypeScript", "HTML/CSS", "Tailwind CSS"],
    //   icon: <Code size={20} />
    // },
    {
      title: "Backend",
      skills: ["Java", "C#", "Spring Boot", ".NET", "Node.js", "Python", "REST APIs"],
      icon: <Database size={20} />
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins", "Git"],
      icon: <Cloud size={20} />
    },
    {
      title: "AI/ML",
      skills: ["TensorFlow", "OpenCV", "Computer Vision", "Machine Learning", "NLP"],
      icon: <Brain size={20} />
    }
  ];

  return (
    <section className={styles.container} id="about">
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>
            Software engineer focused on full‑stack development, cloud infrastructure, and ML. I build scalable, reliable applications and practice modern DevOps. I care about solving real problems and continuously learning to deliver high‑quality software that creates business value.
          </p>
        </motion.div>

        <motion.div className={styles.stats} variants={itemVariants}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className={styles.statItem}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className={styles.statIcon}>
                {stat.icon}
              </div>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.aboutGrid} variants={itemVariants}>
          {aboutItems.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.aboutCard}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className={styles.cardHeader}>
                <div 
                  className={styles.iconContainer}
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <div style={{ color: item.color }}>
                    {item.icon}
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
              <p className={styles.cardDescription}>{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className={styles.skills} variants={itemVariants}>
          <h3 className={styles.skillsTitle}>Technical Expertise</h3>
          <p className={styles.skillsSubtitle}>
            Proficient in modern technologies and frameworks across the full development stack
          </p>
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index}
                className={styles.skillCategory}
                whileHover={{ 
                  scale: 1.02, 
                  y: -3,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className={styles.categoryHeader}>
                  {category.icon}
                  <h4 className={styles.categoryTitle}>{category.title}</h4>
                </div>
                <div className={styles.skillTags}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.skillTag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission merged into subtitle; section removed */}
      </motion.div>
    </section>
  );
};

export default About;
