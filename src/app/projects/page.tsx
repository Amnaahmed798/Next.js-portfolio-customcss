// components/Projects.tsx
import React from "react";

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
    <div className="project-item bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-all duration-300">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-500 mb-4">Built with: {techStack}</p>
      <a
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-blue-700"
      >
        {buttonText}
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="projects py-16 bg-gray-100" id="my-projects">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <div className="projectitems grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
