import Hero from "../components/Hero";

const HomePage = () => {
  return (
    <>
      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Your Corner for your daily electronic needs."
        cta="Shop Now!"
      />

      <section style={{ padding: "40px", textAlign: "center" }}>
        <h2>Why Shop With Us?</h2>
        <p>
          We provide quality electronics at affordable prices with reusable,
          modern React components behind the scenes.
        </p>
      </section>
    </>
  );
};

export default HomePage;
