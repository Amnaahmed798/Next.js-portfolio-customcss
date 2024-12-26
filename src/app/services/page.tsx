import React from 'react'
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaTools } from 'react-icons/fa';

const services = () => {
  return (
        <div className="py-12 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
              My <span className="text-red-800">Services</span>
            </h2>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 - Custom Web Development */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="text-center mb-4">
                  <FaLaptopCode className="mx-auto text-4xl text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Custom Web Development</h4>
                <p className="text-gray-600 mb-4">
                  Delivering bespoke web development solutions that align with unique business objectives.
                </p>
                <a href="#" className="text-red-800 hover:underline">Learn More</a>
              </div>
    
              {/* Service 2 - Responsive Design */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="text-center mb-4">
                  <FaMobileAlt className="mx-auto text-4xl text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Responsive Design</h4>
                <p className="text-gray-600 mb-4">
                  Designing and implementing responsive, user-centric interfaces to ensure a seamless experience.
                </p>
                <a href="#" className="text-red-800 hover:underline">Learn More</a>
              </div>
    
              {/* Service 3 - E-Commerce */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="text-center mb-4">
                  <FaShoppingCart className="mx-auto text-4xl text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">E-Commerce & CMS Integration</h4>
                <p className="text-gray-600 mb-4">
                  Developing e-commerce platforms with advanced features and secure transactions. Integration with CMS.
                </p>
                <a href="#" className="text-red-800 hover:underline">Learn More</a>
              </div>
    
              {/* Service 4 - Ongoing Maintenance */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="text-center mb-4">
                  <FaTools className="mx-auto text-4xl text-gray-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Ongoing Maintenance & SEO</h4>
                <p className="text-gray-600 mb-4">
                  Providing maintenance services to keep websites secure, up-to-date, and optimizing SEO for better traffic.
                </p>
                <a href="#" className="text-red-800 hover:underline">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      );
    };
export default services