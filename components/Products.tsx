export default function Products() {
  const products = [
    {
      name: "Pure Ghee",
      image: "/images/products/ghee.png",
      description: "Rich, aromatic, and traditionally prepared using premium quality milk.",
    },
    {
      name: "Fresh Paneer",
      image: "/images/products/paneer.png",
      description: "Soft, fresh paneer crafted with hygienic processing and rich taste.",
    },
    {
      name: "Farm Fresh Cheese",
      image: "/images/products/cheese.png",
      description: "Creamy cheese made from fresh milk with exceptional quality and flavor.",
    },
    {
      name: "Flavoured Milkshake",
      image: "/images/products/milkshake.jpeg",
      description: "Refreshing and delicious milkshake made from fresh farm milk.",
    },
  ];

  return (
    <section
      id="products"
      style={{
        padding: "100px 8%",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
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
          OUR PRODUCTS
        </p>

        <h2
          style={{
            fontSize: "42px",
            color: "#1B3A2B",
            marginBottom: "15px",
          }}
        >
          Crafted With Care
        </h2>

        <p
          style={{
            color: "#555",
            maxWidth: "650px",
            margin: "0 auto",
            lineHeight: "1.8",
          }}
        >
          Discover our premium dairy products made from fresh farm milk,
          prepared with traditional methods and uncompromising quality.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.name}
            style={{
              background: "#F8F6F1",
              borderRadius: "20px",
              padding: "25px",
              textAlign: "center",
              border: "1px solid #e5e5e5",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "contain",
                marginBottom: "20px",
              }}
            />

            <h3
              style={{
                color: "#1B3A2B",
                marginBottom: "10px",
              }}
            >
              {product.name}
            </h3>

            <p
              style={{
                color: "#555",
                fontSize: "15px",
                lineHeight: "1.6",
              }}
            >
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}