import "./styles/style.scss";
import { pokemonArray } from "./data/pokemon";

const pokemonContainer = document.querySelector(
  ".card-container"
) as HTMLElement;

const pokeCard = (pokemonArray: Pokemon[]) => {
  let cardHTML = "";

  pokemonArray.forEach((pokemon: Pokemon) => {
    cardHTML += `
    <div class="card-container">
      <img class="card__image" src="${pokemon.sprite}" />
      <h2 class="card__heading">${pokemon.name}</h2>
      <p>ID:${pokemon.id}</p>
      <p>Types: ${pokemon.types}</p>
    </div>
  `;
  });
  return cardHTML;
};

pokemonContainer.innerHTML = pokeCard(pokemonArray);

// Attempted different methods -> POINTS FOR SHOWING WORKING OUT

// const pokemonCard = document.querySelector<HTMLElement>(".card-container");
// Create HTML Elements using create.element

// const card = document.createElement("div");
// card.innerHTML = "checking";

// const pokemonName = document.createElement("p");
// pokemonName.textContent = "";

// if (!pokemonCard || pokemonArray || card) {
//   throw new Error("Issue with an initial selector");
// }

// function createPokemonCard () {
//   const card = document.createElement('div');
//   card.classList.add("pokemon-card");

// const name = document.createElement("h2");
//   name.classList.add("card__heading"); // Add the "card__heading" class for applying the styles
//   name.textContent = pokemon.name;

// Try to access the object and then Iterate through the object to create multiple cards using forEach?
