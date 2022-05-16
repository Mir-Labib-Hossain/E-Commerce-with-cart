import React from "react";
import { useSelector } from "react-redux";
import CartView from "./cart-view";
const Cart : React.FC  =()=>{
    const cartProducts = useSelector((state: IStore) => state.persistedReducers.cartReducer.cart);
console.log("cartProducts "+typeof cartProducts);

    return <CartView cartProducts={cartProducts}/>
}
export default Cart;