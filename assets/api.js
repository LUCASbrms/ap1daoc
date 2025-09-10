
export async function buscarTudo(filtro){
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()
    const dataFiltrado = data.filter(item =>
        item.title.includes(filtro)
    )
    return dataFiltrado
}
