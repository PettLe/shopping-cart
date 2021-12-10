import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import App from "./App.js";
import Shop from "./Shop.js";
import Nav from "./Nav.js";

const RouterSwitch = () => {
  const [pokemonPic, setPokemonPic] = useState([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    const bulbasaur = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
      const gorilla = await data.json();
      setPokemonPic((oldArray) => [
        ...oldArray,
        {
          pic: gorilla.sprites.other.dream_world.front_default,
          name: gorilla.name,
        },
      ]);
    };

    const charmander = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/4/");
      const gorilla = await data.json();
      setPokemonPic((oldArray) => [
        ...oldArray,
        {
          pic: gorilla.sprites.other.dream_world.front_default,
          name: gorilla.name,
        },
      ]);
    };

    const squirtle = async () => {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon/7/");
      const gorilla = await data.json();
      setPokemonPic((oldArray) => [
        ...oldArray,
        {
          pic: gorilla.sprites.other.dream_world.front_default,
          name: gorilla.name,
        },
      ]);
    };
    bulbasaur();
    squirtle();
    charmander();
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop pokemon={pokemonPic} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterSwitch;
