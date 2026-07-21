"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Thank you! Your message has been sent successfully.");

        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <span className={styles.tag}>CONTACT US</span>

        <h2>Let's Start A Conversation</h2>

        <p className={styles.subtitle}>
          Have questions about our dairy products, wholesale orders, or
          partnership opportunities? We'd love to hear from you and help you
          experience the freshness of Aavudan.
        </p>

        <div className={styles.wrapper}>
          {/* Left Side */}

          <div className={styles.imageCard}>
            <img
              src="/images/gallery/events/family.png"
              alt="Aavudan Family"
            />

            <div className={styles.quote}>
              <span>PURE • FRESH • AUTHENTIC</span>

              <h3>From Our Farm To Your Family ❤️</h3>

              <p>
                Every product is crafted with care, bringing the goodness of
                fresh dairy directly from our farm to your home.
              </p>
            </div>
          </div>

          {/* Right Side */}

          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <h3>Send Us A Message</h3>

            <p className={styles.formText}>
              Fill out the form below and our team will get back to you as soon
              as possible.
            </p>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Tell us how we can help..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}