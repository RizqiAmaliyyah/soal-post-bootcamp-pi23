import { useEffect, useState } from "react";
import axios from "axios";

function ListPokemon() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getDataPokemon();
  }, []);

  const getDataPokemon = async () => {
    const {data} = await axios("https://pokeapi.deno.dev/pokemon?limit=50");
    setPokemons(data);
  };

  console.log(pokemons);
  
  return (
    <div>
      <div className="list-pokemon">
        {pokemons.map((item) => (
          <h1>{item.name}</h1>
        ))}
      </div>
    </div>
  );
}

export default ListPokemon;