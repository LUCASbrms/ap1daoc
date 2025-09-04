export function Card(product, isFavorito = false) {
  const card = document.createElement("div");
  card.classList.add("card");

  // Verifica o tema salvo no localStorage
  const tema = localStorage.getItem("tema") || "claro";
  if (tema === "escuro") {
    card.classList.add("card-dark");
  } else {
    card.classList.add("card-light");
  }

  card.innerHTML = `
    <img src="${product.image}" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>R$ ${product.price}</p>
    <button class="btnFavorito">${isFavorito ? "Remover" : "Favoritar"}</button>
  `;



  // Botão de Favorito
  const btnFavorito = card.querySelector(".btnFavorito");
  btnFavorito.addEventListener("click", () => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

    if (isFavorito) {
      // Remover dos favoritos
      favoritos = favoritos.filter(fav => fav.id !== product.id);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      btnFavorito.textContent = "Favoritar";
      card.remove(); // remove da lista de favoritos
    } else {
      // Adicionar aos favoritos
      favoritos.push(product);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      btnFavorito.textContent = "Remover";
    }

    // Atualiza seção de favoritos
    const favContainer = document.querySelector("#favoritos");
    if (favContainer) {
      favContainer.innerHTML = "";
      favoritos.forEach(fav => {
        favContainer.appendChild(Card(fav, true));
      });
    }
  });
    return card;
}

 

