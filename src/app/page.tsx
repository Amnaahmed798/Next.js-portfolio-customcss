"use client";
import styles from "../styles/home.module.css"; // Import the CSS module
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaInstagram, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

// Home component
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        {/* Left Section */}
        <div className={styles.homeContentLeft}>
          <div className={styles.introText}>Hello, it&apos;s me</div>
          <h1 className={styles.name}>Amna Ahmed</h1>
          <h4 className={styles.tagline}>And I am a passionate</h4>
          <p className={styles.description}>
             a web developer specializing in creating
            <br />
            dynamic and responsive websites.
          </p>

          {/* Download CV Button */}
          <Button className={styles.downloadBtn}>Download CV</Button>

          {/* Social Icons */}
          <div className={styles.socialIcons}>
            <a
              href="https://www.facebook.com/profile.php?id=100041603694364"
              className={styles.facebookIcon}
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://instagram.com/amnaahmed798"
              className={styles.instagramIcon}
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Amnaahmed798"
              className={styles.githubIcon}
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amna-ahmed-783929282/"
              className={styles.linkedinIcon}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className={styles.homeContentRight}>
          <Image
            src="/images/profile.jpg"
            alt="Hello"
            className={styles.profileImage}
            width={400}
            height={400}
            layout="responsive"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
