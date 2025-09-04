export function Header() {
  const header = document.createElement("header");
  header.innerHTML = `
    <h1>Farido Store</h1>
    <nav>
      <button id="btnProdutos">Produtos</button>
      <button id="btnFavoritos">Favoritos</button>
      <button id="btnClaro">Tema Claro</button>
      <button id="btnEscuro">Tema Escuro</button>
    </nav>
  `;
  return header;
}
