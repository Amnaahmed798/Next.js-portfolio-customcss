import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaTools } from 'react-icons/fa';
import styles from './services.module.css'; // Import the custom CSS file

const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.servicesContent}>
        <h2 className={styles.servicesTitle}>
          My <span className={styles.highlight}>Services</span>
        </h2>

        <div className={styles.servicesGrid}>
          {/* Service 1 - Custom Web Development */}
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <FaLaptopCode className={styles.icon} />
            </div>
            <h4 className={styles.serviceHeading}>Custom Web Development</h4>
            <p className={styles.serviceDescription}>
              Delivering bespoke web development solutions that align with unique business objectives.
            </p>
            <a href="#" className={styles.serviceLink}>Learn More</a>
          </div>

          {/* Service 2 - Responsive Design */}
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <FaMobileAlt className={styles.icon} />
            </div>
            <h4 className={styles.serviceHeading}>Responsive Design</h4>
            <p className={styles.serviceDescription}>
              Designing and implementing responsive, user-centric interfaces to ensure a seamless experience.
            </p>
            <a href="#" className={styles.serviceLink}>Learn More</a>
          </div>

          {/* Service 3 - E-Commerce */}
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <FaShoppingCart className={styles.icon} />
            </div>
            <h4 className={styles.serviceHeading}>E-Commerce & CMS Integration</h4>
            <p className={styles.serviceDescription}>
              Developing e-commerce platforms with advanced features and secure transactions. Integration with CMS.
            </p>
            <a href="#" className={styles.serviceLink}>Learn More</a>
          </div>

          {/* Service 4 - Ongoing Maintenance */}
          <div className={styles.serviceItem}>
            <div className={styles.serviceIcon}>
              <FaTools className={styles.icon} />
            </div>
            <h4 className={styles.serviceHeading}>Ongoing Maintenance & SEO</h4>
            <p className={styles.serviceDescription}>
              Providing maintenance services to keep websites secure, up-to-date, and optimizing SEO for better traffic.
            </p>
            <a href="#" className={styles.serviceLink}>Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
