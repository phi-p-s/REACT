import { useState } from "react";

function capitalize(string){
  console.log(string.charAt(0).toUpperCase() + string.slice(1))
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Pokemon = ({poke}) => {

  const [pokemon, setPokemon] = useState(poke);
  const updateFormSubmission = (event, originalPokemonId) => {
      event.preventDefault();
  
      const pokemonName = event.target[0].value.toLowerCase();
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then((body) => body.json())
        .then((json) => {
          console.log(json);
          setPokemon(json); 
        });
      }

return (

  <div id="grid-item" className = "card">
      <h1>{capitalize(pokemon.species.name)}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.species.name} id="img"/>
      <p>Hp: {pokemon.stats[0].base_stat}</p>
      <p>Atk: {pokemon.stats[1].base_stat}</p>
      <p>Def: {pokemon.stats[2].base_stat}</p>
      <p>Spatk: {pokemon.stats[3].base_stat}</p>
      <p>Spdef: {pokemon.stats[4].base_stat}</p>
      <p>Spd: {pokemon.stats[5].base_stat}</p>
      <form onSubmit={(event) => updateFormSubmission(event, pokemon.id)}>
          <input type="text" placeholder={pokemon.species.name} /> 
          <button type= "submit"> Update</button>
          </form>
  </div>
)

}

export default Pokemon; 