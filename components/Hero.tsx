export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px",
        gap: "70px",
        scrollMarginTop: "100px",
        background: "#F8F6F1",
      }}
    >
      {/* Left Content */}
      <div style={{ flex: 1 }}>
        <p
          style={{
            color: "#C9A24B",
            fontWeight: "700",
            letterSpacing: "3px",
            marginBottom: "20px",
            fontSize: "18px",
          }}
        >
          PURE • FRESH • AUTHENTIC
        </p>

        <h1
          style={{
            fontSize: "68px",
            lineHeight: "1.15",
            color: "#1B3A2B",
            marginBottom: "28px",
            fontWeight: "700",
          }}
        >
          Bringing Farm Fresh Dairy
          <br />
          To Every Home.
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            maxWidth: "560px",
            lineHeight: "1.8",
            marginBottom: "40px",
          }}
        >
          Premium dairy products crafted with purity, traditional care and
          uncompromising quality from Abhivrit Farms.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
          }}
        >
          <a href="#products">
            <button
              style={{
                background: "#1B3A2B",
                color: "#fff",
                padding: "16px 38px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Explore Products
            </button>
          </a>

          <a href="#contact">
            <button
              style={{
                background: "transparent",
                color: "#1B3A2B",
                padding: "16px 38px",
                borderRadius: "10px",
                border: "2px solid #1B3A2B",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Contact Us
            </button>
          </a>
        </div>
      </div>

      {/* Right Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "540px",
            height: "540px",
            background: "#FCFBF8",
            borderRadius: "30px",
            boxShadow: "0 25px 60px rgba(0,0,0,0.08)",
            border: "1px solid #ECE7DC",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "35px",
          }}
        >
          <img
            src="/images/illustrations/mascot.jpeg"
            alt="Aavudan Mascot"
            style={{
              width: "100%",
              maxWidth: "390px",
              objectFit: "contain",
              borderRadius: "18px",
              display: "block",
            }}
          />

          <h3
            style={{
              color: "#1B3A2B",
              fontSize: "20px",
              fontWeight: "700",
              marginTop: "24px",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            From Our Farm To Your Family ❤️
          </h3>

          <p
            style={{
              color: "#777",
              fontSize: "15px",
              letterSpacing: "1px",
              textAlign: "center",
              margin: 0,
            }}
          >
            Pure • Fresh • Authentic
          </p>
        </div>
      </div>
    </section>
  );
}