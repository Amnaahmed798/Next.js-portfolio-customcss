"use client";
import { useState } from "react"; // Import React hooks
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./Header.module.css"; // Import the CSS module

const Header = () => {
  // State to track the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        {/* Portfolio Link */}
        <div className={styles.portfolioLink}>
          <Link href="/">Portfolio</Link>
        </div>

        {/* Desktop Navbar (Visible on larger screens) */}
        <div className={styles.navbar}>
          <ul className={styles.navList}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/aboutme">About Me</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/skills">Skills</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contactme">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navbar (Hamburger Menu) */}
        <div className={styles.mobileNavbar}>
          <Button
            className={styles.hamburgerBtn}
            onClick={toggleMenu}
          >
            &#9776; {/* Hamburger icon */}
          </Button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={styles.mobileMenu}>
              <ul className={styles.mobileNavList}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/aboutme">About Me</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/skills">Skills</Link>
                </li>
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="/contactme">Contact</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
