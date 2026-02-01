import { useParams, Link } from "react-router-dom";

function ProductDetailsPage({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <section>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <Link to="/products">← Back</Link>
    </section>
  );
}

export default ProductDetailsPage;
