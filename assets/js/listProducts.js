import { Card } from "./card.js";
import { buscarTudo } from "../api.js"; 

// export async function coisa(){
//     let data = await buscarTudo()

//     data.map(item => {
//         // div.appendChild(Card(item))
//     console.log(Card(item))
//     });
//     return 

// }


export async function listProducts(){
    let data = await buscarTudo()

    let div = document.createElement('div')
    div.classList = ('cardList')
    let favorito = document.createElement('input')
    favorito.type = ('checkbox')

    data.map(item => {
        div.appendChild(Card(item))
    });
    return div;
}