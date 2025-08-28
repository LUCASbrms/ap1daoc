export async function buscarTudo(){
    const response = await fetch ("https://fakestoreapi.com/products")
    const data = await response.json()
    return data
}
