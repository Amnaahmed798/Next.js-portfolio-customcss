"use client";
import React, { useEffect, useState } from "react";
import { FaHtml5, FaJsSquare, FaPython, FaReact, FaNodeJs } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after the component mounts
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  return (
    <section className="py-16 bg-gray-50" id="my-skills">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Technical Skills</h1>

        <div className="space-y-8">
          {/* Skill 1: HTML */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <FaHtml5 className="text-4xl text-orange-600" />
            </div>
            <div className="flex-grow">
              <div className="text-lg font-semibold text-gray-700">HTML</div>
              <div className="relative pt-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 bg-orange-600 rounded-full transition-all duration-700 ${
                      animate ? "w-4/5" : "w-0"
                    }`}
                  ></div>
                </div>
                {animate && (
                  <div className="absolute right-0 top-0 text-sm font-semibold text-gray-600">80%</div>
                )}
              </div>
            </div>
          </div>


          {/* Skill 3: CSS */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <DiCss3 className="text-4xl text-blue-600" />
            </div>
            <div className="flex-grow">
              <div className="text-lg font-semibold text-gray-700">CSS</div>
              <div className="relative pt-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 bg-blue-600 rounded-full transition-all duration-700 ${
                      animate ? "w-4/5" : "w-0"
                    }`}
                  ></div>
                </div>
                {animate && (
                  <div className="absolute right-0 top-0 text-sm font-semibold text-gray-600">80%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 4: JavaScript */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <FaJsSquare className="text-4xl text-yellow-500" />
            </div>
            <div className="flex-grow">
              <div className="text-lg font-semibold text-gray-700">JavaScript</div>
              <div className="relative pt-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 bg-yellow-500 rounded-full transition-all duration-700 ${
                      animate ? "w-4/5" : "w-0"
                    }`}
                  ></div>
                </div>
                {animate && (
                  <div className="absolute right-0 top-0 text-sm font-semibold text-gray-600">80%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 5: Python */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <FaPython className="text-4xl text-yellow-600" />
            </div>
            <div className="flex-grow">
              <div className="text-lg font-semibold text-gray-700">Python</div>
              <div className="relative pt-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 bg-yellow-600 rounded-full transition-all duration-700 ${
                      animate ? "w-3/5" : "w-0"
                    }`}
                  ></div>
                </div>
                {animate && (
                  <div className="absolute right-0 top-0 text-sm font-semibold text-gray-600">60%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 6: React */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <FaReact className="text-4xl text-blue-500" />
            </div>
            <div className="flex-grow">
              <div className="text-lg font-semibold text-gray-700">React</div>
              <div className="relative pt-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 bg-blue-500 rounded-full transition-all duration-700 ${
                      animate ? "w-3/4" : "w-0"
                    }`}
                  ></div>
                </div>
                {animate && (
                  <div className="absolute right-0 top-0 text-sm font-semibold text-gray-600">75%</div>
                )}
              </div>
            </div>
          </div>

          {/* Skill 7: Next.js */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <FaNodeJs className="text-4xl text-green-600" />
            </div>
            <div className="flex-grow">
              <div className="text-lg font-semibold text-gray-700">Next.js</div>
              <div className="relative pt-2">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className={`h-2 bg-green-600 rounded-full transition-all duration-700 ${
                      animate ? "w-2/3" : "w-0"
                    }`}
                  ></div>
                </div>
                {animate && (
                  <div className="absolute right-0 top-0 text-sm font-semibold text-gray-600">67%</div>
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
