export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
    <h1>Farido Store</h1>
    <div class="search-box">
  <input id="pesquisar" type="text" placeholder="Pesquisar...">
  <button id ="btnPesquisar">
    <img src="/assets/img/image.png" alt="">
  </button>
</div>
    <nav id="nav">
      <button id="btnProdutos">Produtos</button>
      <button id="btnFavoritos">Favoritos</button>
      <button id="btnClaro">Tema Claro</button>
      <button id="btnEscuro">Tema Escuro</button>
    </nav>
  `;
  return header;
}
