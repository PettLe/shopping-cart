function Cart(props) {
  const { shoppingCart, clearCart } = props;

  return (
    <div className="App">
      <h1> Checkout:</h1>
      <div className="cartItems">
        <div className="cartTitles">
          <p>Breed:</p>
          <p>Amount:</p>
        </div>
        {shoppingCart.map((item) => (
          <div className="cartItem">
            <p>{item.pokemonName.toUpperCase()}</p>
            <p> {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={clearCart}>Clear Cart</button>
        <button onClick={() => alert("Not really! Thanks for playing!")}>
          Order!
        </button>
      </div>
    </div>
  );
}

export default Cart;
