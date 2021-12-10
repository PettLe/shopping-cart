function Shop(props) {
  const { pokemon } = props;

  console.log(pokemon);
  return (
    <div className="App">
      <h1> Hellurei from Shop!</h1>
      <div className="shopItems">
        {pokemon.map((item) => (
          <div className="card">
            <p>{item.name}</p>
            <img src={item.pic} alt="bulbasaur" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
