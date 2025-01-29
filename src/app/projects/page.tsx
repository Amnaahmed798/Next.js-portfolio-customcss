import React from "react";
import styles from "./project.module.css"; // Import the custom CSS file

const ProjectItem = ({
  title,
  description,
  techStack,
  githubLink,
  buttonText,
}: {
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
  buttonText: string;
}) => {
  return (
    <div className={styles.projectItem}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <p className={styles.techStack}>Built with: {techStack}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
      >
        {buttonText}
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section className={styles.projectsSection} id="my-projects">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>
          My <span className={styles.highlightText}>Projects</span>
        </h2>
        <div className={styles.projectItems}>
          {/* Project 1 */}
          <ProjectItem
            title="Student Management System"
            description="A robust application for managing student data, including records, course enrollments, and grades."
            techStack="React, Node.js, MongoDB"
            githubLink="https://github.com/Amnaahmed798/Student-Management-System.git"
            buttonText="CLICK HERE"
          />
          {/* Project 2 */}
          <ProjectItem
            title="Simple Calculator"
            description="A basic calculator application that performs fundamental operations like addition, subtraction, multiplication, and division."
            techStack="HTML, CSS, JavaScript"
            githubLink="https://github.com/Amnaahmed798/simple-calculator"
            buttonText="CLICK HERE"
          />
          {/* Project 3 */}
          <ProjectItem
            title="Currency Converter"
            description="A currency converter that provides real-time exchange rate conversion for different currencies."
            techStack="JavaScript, API Integration"
            githubLink="https://github.com/Amnaahmed798/Currency-converter.git"
            buttonText="CLICK HERE"
          />
          {/* Project 4 */}
          <ProjectItem
            title="Word Counter"
            description="A tool that counts words, characters, and sentences in a given text."
            techStack="HTML, CSS, JavaScript"
            githubLink="https://github.com/Amnaahmed798/word-counter"
            buttonText="CLICK HERE"
          />
          {/* Project 5 */}
          <ProjectItem
            title="Number Guessing Game"
            description="A game where players guess a randomly generated number within a set range."
            techStack="JavaScript, HTML, CSS"
            githubLink="https://github.com/Amnaahmed798/number-guessing-game.git"
            buttonText="CLICK HERE"
          />
          {/* Project 6 */}
          <ProjectItem
            title="ATM Machine Simulation"
            description="A virtual ATM system simulating banking operations such as balance checking, deposits, and withdrawals."
            techStack="Java, JavaFX"
            githubLink="https://github.com/Amnaahmed798/amnas-atm-machine"
            buttonText="CLICK HERE"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
