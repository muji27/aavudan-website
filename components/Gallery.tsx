import Image from "next/image";
import styles from "./Gallery.module.css";

const galleryItems = [
  {
    title: "Farm",
    subtitle: "Where Freshness Begins",
    icon: "🌾",
    image: "/images/gallery/farm/farm.png",
  },
  {
    title: "Milking",
    subtitle: "Fresh Every Morning",
    icon: "🥛",
    image: "/images/gallery/farm/milking.png",
  },
  {
    title: "Quality Testing",
    subtitle: "Purity You Can Trust",
    icon: "🧪",
    image: "/images/gallery/factory/quality-testing.png",
  },
  {
    title: "Processing",
    subtitle: "Modern Hygienic Facility",
    icon: "🏭",
    image: "/images/gallery/factory/processing.png",
  },
  {
    title: "Delivery",
    subtitle: "Farm To Your Doorstep",
    icon: "🚚",
    image: "/images/gallery/events/delivery.png",
  },
  {
    title: "Family",
    subtitle: "Moments Shared Together",
    icon: "👨‍👩‍👧",
    image: "/images/gallery/events/family.png",
  },
  {
    title: "Product Showcase",
    subtitle: "Crafted With Authenticity",
    icon: "🧀",
    image: "/images/gallery/products/products.png",
    large: true,
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <div className={styles.container}>

        <span className={styles.tag}>
          OUR JOURNEY
        </span>

        <h2>
          From Healthy Farms
          <br />
          To Your Family's Table
        </h2>

        <p>
          Every Aavudan product begins with healthy cows, careful processing,
          rigorous quality testing, and a commitment to delivering premium dairy
          products with freshness, purity and authenticity.
        </p>

        <div className={styles.grid}>
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className={`${styles.card} ${
                item.large ? styles.largeCard : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width:900px)100vw,50vw"
                className={styles.image}
                priority={item.title === "Farm"}
              />

              <div className={styles.overlay}>
                <div className={styles.caption}>
                  <span className={styles.icon}>
                    {item.icon}
                  </span>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}