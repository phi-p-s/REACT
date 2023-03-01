import { useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon/"
const AddForm = ({ handleSubmit }) => {
    const [formState, setFormState] = useState({ name: '', completed: false });
    return ( 
      <form className = "form" id = "pokemonForm" onSubmit = {
            async (event) => {
                event.preventDefault();
                let used_url = URL.concat(formState.name)
                console.log(used_url)
                const response = await fetch(used_url)
                const body = await response.json()
                console.log(body)
                handleSubmit({ name: body,completed: formState.completed });
                setFormState({ name: '', completed: false });
            }
        }>
        <label htmlFor = "pname" >Pokemon Name:</label><br></br>
        <input type = "text" value = { formState.name }
        onChange = {
            (e) => setFormState({...formState, name: e.target.value }) }
        /> <br></br>
        <button type = "submit" > Add</button>
        </form>
    )
}

export default AddForm;