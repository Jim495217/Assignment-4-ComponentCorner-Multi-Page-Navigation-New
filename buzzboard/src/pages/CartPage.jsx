import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart, cartTotal }) {
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem key={item.id} item={item} onRemove={removeFromCart} />
          ))}
          <h3>Total: ${cartTotal.toFixed(2)}</h3>
        </>
      )}
    </section>
  );
}

export default CartPage;
