import ProductCard from "../components/ProductCard";

const ProductsPage = ({ products, addToCart }) => {
  return (
    <main className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={addToCart}
        />
      ))}
    </main>
  );
};

export default ProductsPage;
