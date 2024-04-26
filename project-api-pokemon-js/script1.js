document.getElementById("cariPokemonmu").addEventListener("click", cariPokemon);

function cariPokemon() {
  const input = document.getElementById("pokemonPilihan").value.trim().toLowerCase();

  const pokemonApi = `https://pokeapi.deno.dev/pokemon?limit=50/${input}`;

  fetch(pokemonApi)
    .then(response => {
      if(!response.ada) {
        throw new Error("Tidaka ada");
      }
      return response.json();
    })
    .then(data => {
      displayPokemon(data);
    })
    .catch(err => {
      console.log(err);
    });
}

function displayPokemon(data) {
  const daftarPokemon = `
    <h2>Nama Pokemon: ${data.name}</h2>
    <img src="${data.imageUrl}">
  `;
  document.getElementById("daftarPokemon").innerHTML = daftarPokemon;
}

function listPokemon(namaPokemon) {
  const listList = document.createElement(`li`);
  listList.textContent = namaPokemon;
  document.getElementById()
}
