import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App.js";
import Shop from "./Shop.js";
import Nav from "./Nav.js";
import Cart from "./Cart.js";

const RouterSwitch = () => {
  const [pokemon, setPokemon] = useState([]);
  const [cartItems, setCartItems] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [pokemonAmount, setPokemonAmount] = useState(0);

  /* INDIVIDUAL STATES FOR EACH POKEMON? Containing the amount. Then render (in the cart) the pokemon, if the amount
  is greater than 0. */

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const bulbasaur = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const pokemon = await data.json();
      setPokemon((oldArray) => [
        ...oldArray,
        {
          pic: pokemon.sprites.other.dream_world.front_default,
          name: pokemon.name,
        },
      ]);
    };

    const charmander = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/4/");
      const pokemon = await data.json();
      setPokemon((oldArray) => [
        ...oldArray,
        {
          pic: pokemon.sprites.other.dream_world.front_default,
          name: pokemon.name,
        },
      ]);
    };

    const squirtle = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/7/");
      const pokemon = await data.json();
      setPokemon((oldArray) => [
        ...oldArray,
        {
          pic: pokemon.sprites.other.dream_world.front_default,
          name: pokemon.name,
        },
      ]);
    };

    const pikachu = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/25/");
      const pokemon = await data.json();
      setPokemon((oldArray) => [
        ...oldArray,
        {
          pic: pokemon.sprites.other.dream_world.front_default,
          name: pokemon.name,
        },
      ]);
    };

    const abra = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/63/");
      const pokemon = await data.json();
      setPokemon((oldArray) => [
        ...oldArray,
        {
          pic: pokemon.sprites.other.dream_world.front_default,
          name: pokemon.name,
        },
      ]);
    };

    const magikarp = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/129/");
      const pokemon = await data.json();
      setPokemon((oldArray) => [
        ...oldArray,
        {
          pic: pokemon.sprites.other.dream_world.front_default,
          name: pokemon.name,
        },
      ]);
    };

    const gastly = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/92/");
      const pokemon = await data.json();
      setPokemon((oldArray) => [
        ...oldArray,
        {
          pic: pokemon.sprites.other.dream_world.front_default,
          name: pokemon.name,
        },
      ]);
    };
    bulbasaur();
    squirtle();
    charmander();
    pikachu();
    abra();
    magikarp();
    gastly();
  };

  const handleCart = () => {
    setCartItems(parseInt(cartItems) + parseInt(pokemonAmount));
  };

  const handleChange = (e) => {
    setPokemonAmount(e.target.value);
    console.log(e.target.value);
  };

  const handleShoppingCart = (e, item) => {
    setShoppingCart((oldArray) => [
      ...oldArray,
      {
        pokemonName: item.name,
        quantity: pokemonAmount,
      },
    ]);
    console.log(shoppingCart);
  };

  const clearCart = () => {
    setShoppingCart([]);
    setCartItems(0);
  };

  return (
    <BrowserRouter>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/shopping-cart" element={<App />} />
        <Route
          path="/shopping-cart/shop"
          element={
            <Shop
              pokemon={pokemon}
              handleCart={handleCart}
              handleChange={handleChange}
              handleShoppingCart={handleShoppingCart}
            />
          }
        />
        <Route
          path="/shopping-cart/cart"
          element={<Cart clearCart={clearCart} shoppingCart={shoppingCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
