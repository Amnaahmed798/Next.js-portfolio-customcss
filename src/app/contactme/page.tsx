'use client';

import React from 'react';
import styles from './Contact.module.css';
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactText}>
        <h2 className={styles.subTitle}>
          Contact <span className={styles.highlight}>Me</span>
        </h2>
        <p className={styles.description}>
          If you&apos;d like to discuss a potential project or have any questions, feel free to reach out to me.
          You can contact me via email at <a href="mailto:amnaahmed.9112@gmail.com" className={styles.emailLink}>amnaahmed.9112@gmail.com</a> 
          or connect with me on <a href="https://www.linkedin.com/in/amna-ahmed-783929282/" className={styles.linkedInLink}>LinkedIn</a>.
        </p>
      </div>

      <div className={styles.contactInfo}>
        <a href="tel:03310300759" className={styles.phone}><FiPhone /> 03310300759</a>
        <a href="mailto:amnaahmed.9112@gmail.com" className={styles.email}><BsEnvelope /> amnaahmed.9112@gmail.com</a>
      </div>

      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com/profile.php?id=100041603694364" className={styles.facebook}><FaFacebookSquare /></a>
        <a href="https://instagram.com/amnaahmed798" className={styles.instagram}><FaInstagram /></a>
        <a href="https://github.com/Amnaahmed798" className={styles.github}><IoLogoGithub /></a>
        <a href="https://www.linkedin.com/in/amna-ahmed-783929282/" className={styles.linkedin}><FaLinkedin /></a>
      </div>

      <div className={styles.contactFormContainer}>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3d48f748-8fac-4613-ba01-a610d3eb8833" />

          <label>Name:</label>
          <input type="text" name="name" placeholder="Enter your Name" className={styles.inputField} />

          <label>Email:</label>
          <input type="email" name="email" placeholder="Enter your E-mail" className={styles.inputField} required />

          <label>Subject:</label>
          <input type="text" name="subject" placeholder="Enter Subject" className={styles.inputField} required />

          <label>Message:</label>
          <textarea name="message" placeholder="Write your Message here.." className={styles.textarea}></textarea>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
