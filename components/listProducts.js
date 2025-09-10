import { Card } from "./Card.js";
import { buscarTudo } from "../assets/api.js"; 

export async function listProducts(filtro){
    let data = await buscarTudo(filtro)

    let div = document.createElement('div')
    div.classList = ('cardList')
    let favorito = document.createElement('input')
    favorito.type = ('checkbox')

    data.map(item => {
        div.appendChild(Card(item))
    });
    return div;
}
