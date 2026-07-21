"use client";

import { useEffect, useState } from "react";
import styles from "./Promotion.module.css";

const promotions = [
  "/images/promotions/promotion-1.jpeg",
  "/images/promotions/promotion-2.jpeg",
  "/images/promotions/promotion-3.jpeg",
  "/images/promotions/promotion-4.jpeg",
];

export default function Promotion() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % promotions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? promotions.length - 1 : prev - 1
    );
  };

  // Promotion 1 is now the wide banner
  const isWidePoster = current === 0;

  return (
    <section id="promotion" className={styles.promotion}>
      <div className={styles.container}>
        <span className={styles.tag}>
          DISCOVER AAVUDAN
        </span>

        <h2>Featured Campaigns</h2>

        <p className={styles.subtitle}>
          Explore our latest promotions, product highlights and delicious
          inspirations crafted with freshness and care.
        </p>

        <div className={styles.slider}>
          <button
            className={styles.arrow}
            onClick={prevSlide}
            aria-label="Previous Promotion"
          >
            ❮
          </button>

          <div
            className={`${styles.imageCard} ${
              isWidePoster ? styles.wideCard : styles.portraitCard
            }`}
          >
            <img
              src={promotions[current]}
              alt={`Promotion ${current + 1}`}
            />
          </div>

          <button
            className={styles.arrow}
            onClick={nextSlide}
            aria-label="Next Promotion"
          >
            ❯
          </button>
        </div>

        <div className={styles.dots}>
          {promotions.map((_, index) => (
            <span
              key={index}
              className={
                current === index
                  ? styles.activeDot
                  : styles.dot
              }
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}