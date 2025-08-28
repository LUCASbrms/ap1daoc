export function Card(data){
    let div = document.createElement('div')
    div.className = ('card')
    let titulo = document.createElement('p')
    let preco = document.createElement('p')
    let descricao = document.createElement('p')
    let categoria = document.createElement('div')
    let favorito = document.createElement('input')
    categoria.id =(data.category)



    titulo.innerHTML = (data.title)
    preco.innerHTML = (`R$${data.price}`)
    descricao.innerHTML = (data.description)
    favorito.type = ('checkbox')


    div.appendChild(categoria)
    div.appendChild(titulo)
    div.appendChild(preco)
    div.appendChild(descricao)
    div.appendChild(favorito)

    return div

}