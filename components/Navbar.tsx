"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <a
        href="#home"
        className={styles.logo}
        aria-label="Aavudan Home"
        onClick={closeMenu}
      >
        <Image
          src="/images/logo/logo.png"
          alt="Aavudan Farm Fresh Dairy"
          width={180}
          height={70}
          priority
          className={styles.logoImage}
        />
      </a>

      {/* Mobile Menu Button */}
      <button
        className={styles.menuButton}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ""}`}></span>
      </button>

      {/* Navigation */}
      <div
        id="mobile-navigation"
        className={`${styles.navLinks} ${
          menuOpen ? styles.navLinksOpen : ""
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={styles.navLink}
            onClick={closeMenu}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}