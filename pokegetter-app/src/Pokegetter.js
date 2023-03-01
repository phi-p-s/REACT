import { useState } from "react";
import AddForm from './AddForm';

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const URL = "https://pokeapi.co/api/v2/pokemon/"
const Pokegetter = () => {
  const [cards, setCards] = useState([]);

  const appendCards = async({ body }) => {
    console.log(body)
    let name = capitalize(body.species.name)
    setCards([...cards, {name}])
  }

  return (
    <>
      <AddForm handleSubmit={appendCards} />
      {cards ? (
        <div class ="pokecards">
          {cards.map((pname) => {
            return <div id={pname.id} className ="card">{pname.name}</div>;
          })}
        </div>
      ) : null}
    </>
  );
};


export default Pokegetter;
