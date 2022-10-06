import { getStoredCart } from "../utilities/fakedb";

export const productsAndCart = async () =>{
    /* get products data */
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    /* get cart data from localstorage*/
    const savedCart = getStoredCart();
    const initialCart = [];
    // console.log(savedCart);

    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);

        // console.log(addedProduct);
        if(addedProduct){
            const quantity = savedCart[id];

            // console.log(id, quantity);

            addedProduct.quantity = quantity;

            // console.log(addedProduct);

            initialCart.push(addedProduct);
        }
    }




    return {products, initialCart};
}