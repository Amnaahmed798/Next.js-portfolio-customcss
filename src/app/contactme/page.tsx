'use client';

import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="py-16 px-6 bg-gray-100">
      {/* Contact Header Section */}
      <div className="contact-text max-w-4xl mx-auto text-center mb-12">
        <h2 className="sub-title text-4xl font-bold mb-4">
          Contact <span className="text-yellow-400">Me</span>
        </h2>
        <div className="text-lg text-gray-700 mb-8">
          If you&apos;d like to discuss a potential project or have any questions about my work, feel free to reach out to me.
          I&apos;m always open to new opportunities and collaborations. You can contact me directly via email at{' '}
          <a href="mailto:amnaahmed.9112@gmail.com" className="text-blue-500">
            amnaahmed.9112@gmail.com
          </a>{' '}
          or connect with me on{' '}
          <a href="https://www.linkedin.com/in/amna-ahmed-783929282/" className="text-blue-500">
            LinkedIn
          </a>
          . I&apos;m eager to explore how we can work together to bring your ideas to life and solve complex challenges through
          innovative solutions. Looking forward to hearing from you!
        </div>

        {/* Contact Info Icons */}
        <div className="icon space-x-6 flex flex-col items-center justify-center mx-auto mb-8">
          <a href="tel:03310300759" className="flex gap-3 text-2xl text-gray-700 hover:text-green-800">
          <FiPhone /> 03310300759
          </a>
          <a href="mailto:amnaahmed.9112@gmail.com" className="flex gap-3 font-bold text-gray-700 hover:text-red-800">
          <BsEnvelope className='text-2xl' /> amnaahmed.9112@gmail.com
          </a>
        </div>

        {/* Social Media Links */}
        <div className="sign space-x-6 flex justify-center">
          <a href="https://www.facebook.com/profile.php?id=100041603694364" className="text-3xl text-gray-700 hover:text-blue-600">
          <FaFacebookSquare />
          </a>
          <a href="https://instagram.com/amnaahmed798" className="text-3xl text-gray-700 hover:text-pink-600">
          <FaInstagram />
          </a>
          <a href="https://github.com/Amnaahmed798" className="text-3xl text-gray-700 hover:text-black">
          <IoLogoGithub />
          </a>
          <a href="https://www.linkedin.com/in/amna-ahmed-783929282/" className="text-3xl text-gray-700 hover:text-blue-600">
          <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="3d48f748-8fac-4613-ba01-a610d3eb8833" />

          {/* Name Field */}
          <div className="form-group mb-4">
            <label htmlFor="name" className="block text-lg font-semibold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your Name"
              className="w-full text-sm p-2 border-2 border-gray-300 rounded-lg"
            />
          </div>

          {/* Email Field */}
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your E-mail"
              className="w-full text-sm p-2  border-2 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Subject Field */}
          <div className="form-group mb-4">
            <label htmlFor="subject" className="block text-lg font-semibold mb-2">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Enter Subject"
              className="w-full text-sm p-2 border-2 border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Message Field */}
          <div className="form-group mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Message:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your Message here.."
              className="w-full p-2  border-2 border-gray-300 text-sm rounded-lg"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full py-3 bg-blue-600 text-sm text-white font-semibold rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;