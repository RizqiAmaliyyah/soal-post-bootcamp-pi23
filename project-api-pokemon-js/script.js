
fetch("https://pokeapi.deno.dev/pokemon?limit=50")
.then(res => {
  console.log(res);
  return res.json
})
.then(res => {
  console.log(res);
})
.catch(error => {
  console.log(error);
})

async function dataPokemon () {
  try {
    let respon = await fetch("https://pokeapi.deno.dev/pokemon?limit=50")
    let pokemons = await respon.json()

    console.log(pokemons);
  } catch (error) {
    console.log(error);
  }
}

dataPokemon()

let listPokemon = document.getElementById('data-pokemon')

async function dataPokemon () {

}