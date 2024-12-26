// components/Footer.tsx
import React from "react";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Left section: About/Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-400">
              Passionate about coding, web development, and creating intuitive
              user experiences. Let&apos;s connect and build something amazing!
            </p>
          </div>

          {/* Center section: Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
            <li>
                <a href="/" className=" hover:text-blue-500">
                  Home
                </a>
              </li>
            <li>
                <a href="aboutme" className="hover:text-blue-500">
                  About me
                </a>
              </li>
            <li>
                <a href="services" className="hover:text-blue-500">
                  Services
                </a>
              </li>
              <li>
                <a href="skills" className="hover:text-blue-500">
                  Skills
                </a>
              </li>
              <li>
                <a href="projects" className="hover:text-blue-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="contactme" className="hover:text-blue-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right section: Social Links */}
          <div className="sign space-x-6 flex justify-center mt-6">
                      <a
                        href="https://www.facebook.com/profile.php?id=100041603694364"
                        className="text-3xl text-white hover:text-blue-600"
                      >
                        <FaFacebookSquare />
                      </a>
                      <a
                        href="https://instagram.com/amnaahmed798"
                        className="text-3xl text-white hover:text-pink-600"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href="https://github.com/Amnaahmed798"
                        className="text-3xl text-white hover:text-black"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/amna-ahmed-783929282/"
                        className="text-3xl text-white hover:text-blue-600"
                      >
                        <FaLinkedin />
                      </a>
                    </div>
                    </div>

        {/* Bottom section: Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Amna Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
