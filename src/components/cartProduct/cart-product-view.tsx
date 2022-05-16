import React from "react";
import { Header } from "../../styles/common.styled";
const CartProductView: React.FC<ICartProduct> = ({ id, image, title, category, description, price, qty, rating }) => {
  return (<>
  <br />
    <Header fontSize="">
      {title}
    </Header>
      Quantity : {qty}
  </>
  );
};
export default CartProductView;
