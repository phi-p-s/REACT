import { useState } from "react";
import Pokemon from './pokemonList';
import "./App.css"

function App() {
  const [pokemon, setPokemon] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    const pokemonName = event.target[0].value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((body) => body.json())
      .then((json) => {
        console.log(json);
        setPokemon([...pokemon, json]);
      });
  };

  return (
    <>
      <div>
        <div>
        <h1>Pokemon Cards Thing</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Pokemon name..." />
          <button type="submit">Fetch Pokemon</button>
           </form>
      </div>
        <div id="root">
        {pokemon.map((p)=>(
          <Pokemon poke={p}/>
        ))}
        </div>
  
    </>
  );
}

export default App;
