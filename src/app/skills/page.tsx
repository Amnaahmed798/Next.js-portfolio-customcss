"use client";
import React, { useEffect, useState } from "react";
import { FaHtml5, FaJsSquare, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import styles from "./skills .module.css"; // Import the custom CSS file

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <section className={styles.skillsSection} id="my-skills">
      <div className={styles.container}>
        <h1 className={styles.title}>Technical Skills</h1>

        <div className={styles.skillList}>
          {/* Skill 1: HTML */}
          <div className={styles.skillItem}>
            <div className={styles.icon}>
              <FaHtml5 />
            </div>
            <div className={styles.skillContent}>
              <div className={styles.skillName}>HTML</div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progress} ${animate ? styles.animateWidth80 : ""}`}
                  ></div>
                </div>
                {animate && (
                  <div className={styles.skillPercentage}>80%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 2: CSS */}
          <div className={styles.skillItem}>
            <div className={styles.icon}>
              <DiCss3 />
            </div>
            <div className={styles.skillContent}>
              <div className={styles.skillName}>CSS</div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progress} ${animate ? styles.animateWidth80 : ""}`}
                  ></div>
                </div>
                {animate && (
                  <div className={styles.skillPercentage}>80%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 3: JavaScript */}
          <div className={styles.skillItem}>
            <div className={styles.icon}>
              <FaJsSquare />
            </div>
            <div className={styles.skillContent}>
              <div className={styles.skillName}>JavaScript</div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progress} ${animate ? styles.animateWidth80 : ""}`}
                  ></div>
                </div>
                {animate && (
                  <div className={styles.skillPercentage}>80%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 4: Python */}
          <div className={styles.skillItem}>
            <div className={styles.icon}>
              <FaPython />
            </div>
            <div className={styles.skillContent}>
              <div className={styles.skillName}>Python</div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progress} ${animate ? styles.animateWidth60 : ""}`}
                  ></div>
                </div>
                {animate && (
                  <div className={styles.skillPercentage}>60%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 5: React */}
          <div className={styles.skillItem}>
            <div className={styles.icon}>
              <FaReact />
            </div>
            <div className={styles.skillContent}>
              <div className={styles.skillName}>React</div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progress} ${animate ? styles.animateWidth75 : ""}`}
                  ></div>
                </div>
                {animate && (
                  <div className={styles.skillPercentage}>75%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 6: Next.js */}
          <div className={styles.skillItem}>
            <div className={styles.icon}>
              <FaNodeJs />
            </div>
            <div className={styles.skillContent}>
              <div className={styles.skillName}>Next.js</div>
              <div className={styles.progressContainer}>
                <div className={styles.progressBar}>
                  <div
                    className={`${styles.progress} ${animate ? styles.animateWidth67 : ""}`}
                  ></div>
                </div>
                {animate && (
                  <div className={styles.skillPercentage}>67%</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
