import React from "react";
import CartProductView from "../cartProduct/cart-product-view";
import { CartContainer } from "./styled";
const CartView: React.FC<any> = ({ cartProducts }) => {
  console.log(cartProducts.cart);

  const list = cartProducts.map(({ id, image, title, category, description, price, qty, rating }: ICartProduct, index: number) => <CartProductView key={index} id={id} image={image} title={title} category={category} description={description} price={price} qty={qty} rating={rating} />);

  return <CartContainer> {list} </CartContainer>;
};
export default CartView;
