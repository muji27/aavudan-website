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
    <section
      id="about"
      style={{
        padding: "100px 8%",
        background: "#F8F6F1",
        scrollMarginTop: "100px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "70px",
        }}
      >
        <p
          style={{
            color: "#C9A24B",
            fontWeight: 700,
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          ABOUT US
        </p>

        <h2
          style={{
            fontSize: "42px",
            color: "#1B3A2B",
            marginBottom: "15px",
          }}
        >
          Tradition Meets Purity
        </h2>

        <p
          style={{
            color: "#555",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          At Aavudan, every product begins with fresh farm milk and is crafted
          using traditional methods. Our commitment to quality, hygiene, and
          authenticity ensures every family enjoys the rich taste of nature.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Image */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="/images/about/factory-worker.jpeg"
            alt="Aavudan Production Process"
            style={{
              width: "80%",
              maxWidth: "520px",
              borderRadius: "24px",
              boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
            }}
          />
        </div>

        {/* Content */}
        <div>
          <h3
            style={{
              color: "#1B3A2B",
              fontSize: "32px",
              marginBottom: "20px",
            }}
          >
            Crafted With Passion,
            <br />
            Trusted By Families
          </h3>

          <p
            style={{
              color: "#555",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            From carefully selected milk to hygienic processing and traditional
            preparation techniques, Aavudan focuses on delivering premium dairy
            products that bring freshness and authenticity to every home.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
            }}
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: "#ffffff",
                  padding: "20px",
                  borderRadius: "18px",
                  border: "1px solid #e5e5e5",
                }}
              >
                <div
                  style={{
                    fontSize: "32px",
                    marginBottom: "12px",
                  }}
                >
                  {feature.icon}
                </div>

                <h4
                  style={{
                    color: "#1B3A2B",
                    marginBottom: "8px",
                  }}
                >
                  {feature.title}
                </h4>

                <p
                  style={{
                    color: "#666",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
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