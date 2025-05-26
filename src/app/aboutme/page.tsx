import React from 'react';
import styles from './aboutme.module.css'; // Ensure this path matches your project structure

const AboutMe = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.aboutTitle}>
        About <span className={styles.highlight}>Me</span>
      </h2>
      <h4 className={styles.aboutSubtitle}>Full Stack Developer</h4>
      <p className={styles.aboutDescription}>
        As a seasoned web developer with over three years of experience, I have honed my skills across both front-end and back-end technologies, embodying the role of a full stack developer. My expertise spans from crafting dynamic, user-centric interfaces with HTML, CSS, and JavaScript to building robust server-side applications with technologies such as Node.js and Python. 
        I am adept at integrating databases, optimizing performance, and ensuring seamless user experiences across diverse platforms. 
        My ability to bridge the gap between design and functionality allows me to deliver comprehensive, scalable solutions that meet complex project requirements. 
        With a passion for innovation and a commitment to excellence, I continuously seek to leverage my skills to drive impactful digital transformations and contribute to forward-thinking teams.
      </p>
    </div>
  );
};

export default AboutMe;