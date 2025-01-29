// components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css"; // Import the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left section: About/Contact */}
          <div>
            <h3 className={styles.title}>About Me</h3>
            <p className={styles.text}>
              Passionate about coding, web development, and creating intuitive
              user experiences. Let&apos;s connect and build something amazing!
            </p>
          </div>

          {/* Center section: Links */}
          <div>
            <h3 className={styles.title}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/" className={styles.link}>
                  Home
                </a>
              </li>
              <li>
                <a href="/aboutme" className={styles.link}>
                  About Me
                </a>
              </li>
              <li>
                <a href="/services" className={styles.link}>
                  Services
                </a>
              </li>
              <li>
                <a href="/skills" className={styles.link}>
                  Skills
                </a>
              </li>
              <li>
                <a href="/projects" className={styles.link}>
                  Projects
                </a>
              </li>
              <li>
                <a href="/contactme" className={styles.link}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right section: Social Links */}
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=100041603694364"
              className={`${styles.icon} ${styles.facebook}`}
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://instagram.com/amnaahmed798"
              className={`${styles.icon} ${styles.instagram}`}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Amnaahmed798"
              className={`${styles.icon} ${styles.github}`}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amna-ahmed-783929282/"
              className={`${styles.icon} ${styles.linkedin}`}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Bottom section: Copyright */}
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} Amna Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
