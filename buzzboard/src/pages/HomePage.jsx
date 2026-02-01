import Hero from "../components/Hero";

function HomePage() {
  return (
    <>
      <Hero title="Welcome to ComponentCorner" subtitle="Your corner for your daily electronic needs." cta="Shop Now" />
      <section>
        <h2>Why Shop With Us?</h2>
        <p>Quality products. Fast shipping. Great support.</p>
      </section>
    </>
  );
}

export default HomePage;
