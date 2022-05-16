import React from "react";
import CartProductView from "./cart-product-view";
const CartProduct : React.FC <ICartProduct> = ({ id, image, title, category, description, price, qty, rating }) => {
    return <CartProductView id={id} image={image} title={title} category={category} description={description} price={price} qty={qty} rating={rating} />
}
export default CartProduct;



 