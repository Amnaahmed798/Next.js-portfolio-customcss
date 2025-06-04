"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/">Portfolio</Link>
        </div>

        {/* Hamburger Button */}
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={isOpen ? styles.barActive : styles.bar}></span>
          <span className={isOpen ? styles.barActive : styles.bar}></span>
          <span className={isOpen ? styles.barActive : styles.bar}></span>
        </button>

        {/* Nav Links */}
        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
          <ul>
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/aboutme" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link href="/contactme" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
