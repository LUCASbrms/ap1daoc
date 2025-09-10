import { listProducts } from "../../components/listProducts.js";
import { Header } from "../../components/Header.js";
import { Favoritos } from "../../components/Favoritos.js";

const app = document.querySelector("#app");
app.appendChild(Header());


// Área principal dinâmica
const main = document.createElement("main");
app.appendChild(main);

async function renderProdutos() {
  main.innerHTML = "<p>Carregando...</p>";
  main.innerHTML = "";
  main.appendChild(await listProducts(""));
}

function renderFavoritos() {
  main.innerHTML = "";
  main.appendChild(Favoritos());
}

// Eventos SPA
document.addEventListener("click", async (e) => {
  if (e.target.id === "btnProdutos") renderProdutos();
  if (e.target.id === "btnFavoritos") renderFavoritos();
  if (e.target.id === "btnPesquisar") pesquisar();

  if (e.target.id === "btnClaro") {
  document.body.style.background = "#fff";
  document.body.style.color = "#000";
  localStorage.setItem("tema", "claro");

  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("card-dark");
    c.classList.add("card-light");
  });
}

if (e.target.id === "btnEscuro") {
  document.body.style.background = "#121212";
  document.body.style.color = "#fff";
  localStorage.setItem("tema", "escuro");

  document.querySelectorAll(".card").forEach(c => {
    c.classList.remove("card-light");
    c.classList.add("card-dark");
  });
}

});

// Carrega tema do localStorage
const tema = localStorage.getItem("tema");
if (tema === "escuro") {
  document.body.style.background = "#121212";
  document.body.style.color = "#fff";
}

// filtro por nome
const inputProcurar = document.querySelector("#pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")


async function pesquisar(){
    const pesquisa = inputProcurar.value
    main.innerHTML = "<p>Carregando...</p>";
    main.innerHTML = "";
    main.appendChild(await listProducts(pesquisa));
}

