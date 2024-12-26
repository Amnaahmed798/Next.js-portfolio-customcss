"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Home = () => {
  return (
    <div className="w-full ">
     
      <div className="flex flex-col md:flex-row h-auto py-16 justify-center items-center  px-6 content-center space-y-3 md:space-y-0 md:space-x-6 bg-slate-50">
        {/* Left Section */}
        <div className="flex flex-col gap-3 items-center md:items-start text-center md:text-left">
          <div>Hello, it&apos;s me</div>
          <div>
            <h1 className="font-bold text-2xl md:text-4xl">Amna Ahmed</h1>
          </div>
          <div>
            <h4 className="font-bold text-4xl text-red-800">And I am a passionate</h4>
          </div>
          <div>
            And a web developer specializing in creating
            <br />
            dynamic and responsive websites.
          </div>
          <Button
            variant="outline"
            className="bg-red-800 text-white font-semibold border-e-2 border-black mt-4"
          >
            Download CV
          </Button>

          <div className="sign space-x-6 flex justify-center mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100041603694364"
              className="text-3xl text-gray-700 hover:text-blue-600"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://instagram.com/amnaahmed798"
              className="text-3xl text-gray-700 hover:text-pink-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/Amnaahmed798"
              className="text-3xl text-gray-700 hover:text-black"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/amna-ahmed-783929282/"
              className="text-3xl text-gray-700 hover:text-blue-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="justify-center items-center mt-4 md:mt-0 ">
          <Image
            src="/images/bg3.png"
            alt="Hello"
            className="bg-transparent"
            width={400}
            height={400}
            layout="responsive"
            priority // To ensure the image is responsive and fills the available space
          />
        </div>
      </div>
    </div>
  );
};


;

export default Home;