function Shop(props) {
  const { pokemon, handleCart } = props;

  return (
    <div className="App">
      <h1> Breeds!</h1>
      <div className="shopItems">
        {pokemon.map((item) => (
          <div className="card">
            <img src={item.pic} alt="bulbasaur" />
            <p>{item.name}</p>
            <button onClick={handleCart}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
