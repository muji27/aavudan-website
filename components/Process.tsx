import styles from "./Process.module.css";

const processSteps = [
  {
    number: "01",
    title: "Fresh Cow Milking",
    description:
      "Our healthy cows are milked every morning using hygienic practices to preserve natural freshness, nutrition and superior taste.",
    image: "/images/process/cow-milking.png",
  },
  {
    number: "02",
    title: "Milk Collection",
    description:
      "Fresh milk is immediately transferred into chilled bulk milk coolers at the collection centre to maintain its original quality.",
    image: "/images/process/milk-collection.png",
  },
  {
    number: "03",
    title: "Pasteurization",
    description:
      "The milk is gently pasteurized using controlled temperatures to remove harmful bacteria while preserving essential nutrients.",
    image: "/images/process/pasteurizer.png",
  },
  {
    number: "04",
    title: "Flavour Preparation",
    description:
      "Premium ingredients and authentic flavours are blended under strict quality standards to create delicious dairy products.",
    image: "/images/process/flavour-preparation.png",
  },
  {
    number: "05",
    title: "Packaging & Quality Check",
    description:
      "Every product undergoes careful inspection, hygienic packaging and quality assurance before reaching your family.",
    image: "/images/process/packaging.png",
  },
];

export default function Process() {
  return (
    <section id="process" className={styles.processSection}>
      <div className={styles.heading}>

        <span className={styles.subtitle}>
          OUR MANUFACTURING PROCESS
        </span>

        <h2>
          From Farm To Family
        </h2>

        <p>
          Every drop of milk follows a carefully monitored journey.
          From healthy dairy farms to hygienic processing and premium
          packaging, we ensure freshness, purity and quality at every step.
        </p>

      </div>

      <div className={styles.timeline}>

        <div className={styles.verticalLine}></div>

        {processSteps.map((step, index) => (

          <div
            key={step.number}
            className={`${styles.timelineRow} ${
              index % 2 !== 0 ? styles.reverse : ""
            }`}
          >

            {/* Image Card */}

            <div className={styles.imageColumn}>

              <div className={styles.imageCard}>

                <img
                  src={step.image}
                  alt={step.title}
                  className={styles.processImage}
                />

              </div>

            </div>

            {/* Timeline */}

            <div className={styles.middleColumn}>

              <div className={styles.circle}>

                {step.number}

              </div>

            </div>

            {/* Content */}

            <div className={styles.contentColumn}>

              <div className={styles.contentCard}>

                <span className={styles.stepLabel}>
                  STEP {step.number}
                </span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </div>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}