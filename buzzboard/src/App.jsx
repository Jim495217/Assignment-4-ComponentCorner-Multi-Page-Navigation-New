import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header storeName="ComponentCorner" />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Your Corner for your daily electronic needs."
        cta="Shop Now!"
      />

      <main className="products">
        <ProductCard
          name="Wireless Earbuds"
          price={99.99}
          image="https://placehold.co/600x400"
          description="Comes with noise cancellation and high sound quality."
        />

        <ProductCard
          name="Bluetooth Speaker"
          price={59.99}
          image="https://placehold.co/600x400"
          description="A small, portable speaker that can satisfy your music needs."
        />

        <ProductCard
          name="Laptop"
          price={599.99}
          image="https://placehold.co/600x400"
          description="A portable, sleek device ready for work and play."
        />
      </main>

      <Footer
        storeName="ComponentCorner"
        email="support@componentcorner.com"
        phone="(999) 432-5927"
      />
    </>
  );
}

export default App;
