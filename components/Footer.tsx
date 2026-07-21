import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}

        <div className={styles.brand}>
          <img
            src="/images/logo/logo.png"
            alt="Aavudan Logo"
            className={styles.logo}
          />

          <p>
            Premium farm fresh dairy products crafted with purity,
            traditional care, and uncompromising quality.
          </p>
        </div>

        {/* Quick Links */}

        <div className={styles.links}>
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#process">Process</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Contact */}

        <div className={styles.contact}>
          <h3>Contact</h3>

          <p>
            📍 No: 83/7,
            <br />
            Koodapakkam,
            <br />
            Puducherry - 605502
          </p>

          <p>📞 0413-2225762</p>

          <p>✉️ abhivritfarms@gmail.com</p>
        </div>

        {/* Trust Badge */}

        <div className={styles.trust}>
          <div className={styles.badge}>
            <div className={styles.check}>✔</div>

            <h3>Certified & Trusted</h3>

            <span>FSSAI Approved</span>

            <p>License No.</p>

            <strong>13526001000214</strong>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        © 2026 Abhivrit Farms Private Limited. All Rights Reserved.
      </div>
    </footer>
  );
}