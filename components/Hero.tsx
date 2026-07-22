import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Left Content */}
      <div className={styles.content}>
        <p className={styles.tagline}>
          PURE • FRESH • AUTHENTIC
        </p>

        <h1 className={styles.title}>
          Bringing Farm Fresh Dairy
          <br />
          To Every Home.
        </h1>

        <p className={styles.description}>
          Premium dairy products crafted with purity, traditional care and
          uncompromising quality from Abhivrit Farms.
        </p>

        <div className={styles.heroCardMobile}>
          <div className={styles.heroCard}>
            <Image
              src="/images/illustrations/mascot.jpeg"
              alt="Aavudan Mascot"
              width={390}
              height={390}
              priority
              className={styles.mascot}
            />

            <h3 className={styles.cardTitle}>
              From Our Farm To Your Family ❤️
            </h3>

            <p className={styles.cardSubtitle}>
              Pure • Fresh • Authentic
            </p>
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <a href="#products" className={styles.primaryButton}>
            Explore Products
          </a>

          <a href="#contact" className={styles.secondaryButton}>
            Contact Us
          </a>
        </div>
      </div>

      {/* Right Content (Desktop) */}
      <div className={styles.imageSection}>
        <div className={styles.heroCard}>
          <Image
            src="/images/illustrations/mascot.jpeg"
            alt="Aavudan Mascot"
            width={390}
            height={390}
            priority
            className={styles.mascot}
          />

          <h3 className={styles.cardTitle}>
            From Our Farm To Your Family ❤️
          </h3>

          <p className={styles.cardSubtitle}>
            Pure • Fresh • Authentic
          </p>
        </div>
      </div>
    </section>
  );
}