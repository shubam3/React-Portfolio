import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle, Send, MapPin, Phone } from 'lucide-react';
import styles from "./Contact.module.css";

const Contact = () => {
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

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "shubam@vt.edu",
      href: "mailto:shubam@vt.edu",
      color: "var(--color-primary)"
    },
    {
      icon: <Linkedin size={24} />,
      title: "LinkedIn",
      value: "linkedin.com/shubam3",
      href: "https://www.linkedin.com/in/shubam-khantwal-86410519b/?originalSubdomain=in",
      color: "var(--color-secondary)"
    },
    {
      icon: <Github size={24} />,
      title: "GitHub",
      value: "github.com/shubam3",
      href: "https://www.github.com/shubam3",
      color: "var(--color-accent)"
    }
  ];

  return (
    <section id="contact" className={styles.container}>
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div className={styles.header} variants={itemVariants}>
          <div className={styles.titleContainer}>
            <MessageCircle size={40} className={styles.titleIcon} />
            <h2 className={styles.title}>Get In Touch</h2>
          </div>
          <p className={styles.subtitle}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div className={styles.contactGrid} variants={itemVariants}>
          <div className={styles.contactInfo}>
            <h3 className={styles.sectionTitle}>Let's Connect</h3>
            <p className={styles.description}>
              Feel free to reach out through any of the channels below. I typically respond within 24 hours.
            </p>
            
            <div className={styles.contactMethods}>
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactMethod}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className={styles.methodIcon}
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <div style={{ color: method.color }}>
                      {method.icon}
                    </div>
                  </div>
                  <div className={styles.methodInfo}>
                    <h4 className={styles.methodTitle}>{method.title}</h4>
                    <p className={styles.methodValue}>{method.value}</p>
                  </div>
                  <Send size={16} className={styles.sendIcon} />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div className={styles.contactForm} variants={itemVariants}>
            <h3 className={styles.sectionTitle}>Send a Message</h3>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className={styles.input}
                  placeholder="Your name"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className={styles.input}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className={styles.input}
                  placeholder="What's this about?"
                />
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  className={styles.textarea}
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <motion.button 
                type="submit" 
                className={styles.submitButton}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div className={styles.footer} variants={itemVariants}>
          <p className={styles.footerText}>
            © 2025 Shubam Khantwal. Built with React and lots of ☕
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
