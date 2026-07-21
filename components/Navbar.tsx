import styles from "./Navbar.module.css";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Process", href: "#process" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={styles.navbar}>
      {/* Brand Logo */}
      <a
        href="#home"
        className={styles.logo}
        aria-label="Aavudan Home"
      >
        <img
          src="/images/logo/logo.png"
          alt="Aavudan Farm Fresh Dairy"
          className={styles.logoImage}
        />
      </a>

      {/* Navigation Links */}
      <div className={styles.navLinks}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={styles.navLink}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}