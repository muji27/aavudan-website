import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  const features = [
    {
      title: "Farm Fresh Milk",
      description: "Fresh milk sourced daily from trusted local farms.",
      icon: "🐄",
    },
    {
      title: "Hygienic Processing",
      description:
        "Produced in modern facilities while maintaining strict hygiene standards.",
      icon: "🧼",
    },
    {
      title: "Premium Quality",
      description:
        "Every product is carefully prepared to preserve freshness, taste, and nutrition.",
      icon: "🏆",
    },
    {
      title: "Made With Care",
      description:
        "Traditional recipes crafted with dedication to deliver authentic dairy products.",
      icon: "❤️",
    },
  ];

  return (
    <section id="about" className={styles.about}>
      {/* Section Heading */}
      <div className={styles.heading}>
        <p className={styles.tagline}>ABOUT US</p>

        <h2 className={styles.title}>
          Tradition Meets Purity
        </h2>

        <p className={styles.subtitle}>
          At Aavudan, every product begins with fresh farm milk and is crafted
          using traditional methods. Our commitment to quality, hygiene and
          authenticity ensures every family enjoys the rich taste of nature.
        </p>
      </div>

      {/* Main Content */}
      <div className={styles.wrapper}>
        {/* Image */}
        <div className={styles.imageContainer}>
          <Image
            src="/images/about/factory-worker.jpeg"
            alt="Aavudan Production Process"
            width={520}
            height={700}
            className={styles.image}
          />
        </div>

        {/* Right Content */}
        <div className={styles.content}>
          <h3 className={styles.contentTitle}>
            Crafted With Passion,
            <br />
            Trusted By Families
          </h3>

          <p className={styles.contentDescription}>
            From carefully selected milk to hygienic processing and traditional
            preparation techniques, Aavudan focuses on delivering premium dairy
            products that bring freshness and authenticity to every home.
          </p>

          <div className={styles.featureGrid}>
            {features.map((feature) => (
              <div
                key={feature.title}
                className={styles.featureCard}
              >
                <div className={styles.icon}>
                  {feature.icon}
                </div>

                <h4 className={styles.featureTitle}>
                  {feature.title}
                </h4>

                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}