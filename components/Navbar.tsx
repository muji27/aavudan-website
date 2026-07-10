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
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 80px",
        background: "#F8F6F1",
        borderBottom: "1px solid #E5E5E5",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Logo */}
      <a
        href="#home"
        style={{
          textDecoration: "none",
        }}
      >
        <h2
          style={{
            color: "#1B3A2B",
            fontSize: "32px",
            fontWeight: "bold",
            margin: 0,
            cursor: "pointer",
          }}
        >
          Aavudan
        </h2>
      </a>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          fontSize: "18px",
          alignItems: "center",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            style={{
              textDecoration: "none",
              color: "#1B3A2B",
              fontWeight: 500,
              transition: "0.3s",
            }}
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  );
}