import { Card } from "./Card.JS";

export function Favoritos() {
  const section = document.createElement("section");
  section.classList.add("cardList");

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    section.innerHTML = "<p>Nenhum produto favoritado.</p>";
    return section;
  }

  favoritos.forEach(prod => {
    const card = Card(prod, true);
    section.appendChild(card);
  });

  return section;
}

