import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App.js";
import Shop from "./Shop.js";
import Nav from "./Nav.js";

const RouterSwitch = () => {
  const [pokemon, setPokemon] = useState([]);
  const [cartItems, setCartItems] = useState(0);
  const [shoppingCart, setShoppingCart] = useState([]);

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
    setCartItems(cartItems + 1);
  };

  const handleShoppingCart = (item) => {
    setShoppingCart((oldArray) => [
      ...oldArray,
      {
        pokemonName: item.name,
        quantity: "",
      },
    ]);
    console.log(shoppingCart);
  };

  return (
    <BrowserRouter>
      <Nav cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={
            <Shop
              pokemon={pokemon}
              handleCart={handleCart}
              handleShoppingCart={handleShoppingCart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;

/*Cools story bro */
