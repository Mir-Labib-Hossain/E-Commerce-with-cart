import React from "react";
import { useSelector } from "react-redux";
import CartProductView from "../cartProduct/cart-product-view";
import CartView from "./cart-view";
export interface CartViewProps {
  cartProducts: JSX.Element[];
  totalCost: number;
}
const Cart: React.FC = () => {
  const cart = useSelector((state: IStore) => state.persistedReducers.cartReducer.cart);
  const cartProducts = cart.map(({ id, image, title, category, description, price, qty, rating }: ICartProduct, index: number) => <CartProductView key={index} id={id} image={image} title={title} category={category} description={description} price={price} qty={qty} rating={rating} />);

  let totalCost = 0;
  cart.map(({ price, qty }) => (totalCost += price * qty));
  totalCost = +totalCost.toFixed(2); // used '+' to convert string to number ~ because .toFixed() returns string

  return <CartView cartProducts={cartProducts} totalCost={totalCost} />;
};
export default Cart;
