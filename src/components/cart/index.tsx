import React from "react";
import { useSelector } from "react-redux";
import CartView from "./cart-view";
const Cart : React.FC  =()=>{
    const cartProducts = useSelector((state: IState) => state.cartReducer.cart);

    return <CartView cartProducts={cartProducts}/>
}
export default Cart;