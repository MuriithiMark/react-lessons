
async function getProducts(
    setProductsState,
    setErrorMsg = (message) => console.log(message)
) {

    const url = "https://dummyjson.com/products";
    const response = await fetch(url);
    if (!response.ok) {
        setErrorMsg("fetch error");
        setProductsState([]);
    }
    const jsonData = await response.json();
    const products = jsonData.products;
    setProductsState(products);
    setErrorMsg("");
}

export { getProducts }