function Shop(props) {
  const { pokemon, handleCart, handleChange, handleShoppingCart } = props;

  return (
    <div className="App">
      <h1> Breeds!</h1>
      <div className="shopItems">
        {pokemon.map((item) => (
          <div className="card">
            <img src={item.pic} alt="bulbasaur" />
            <div className="itemInfo">
              <p>{item.name}</p>

              <input type="number" onChange={(e) => handleChange(e)} />
              <button
                onClick={(e) => {
                  handleCart();
                  handleShoppingCart(e, item);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
