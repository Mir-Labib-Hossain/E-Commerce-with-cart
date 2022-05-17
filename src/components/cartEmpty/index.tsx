import React from "react";
import { Link } from "react-router-dom";
import { Header, Icon,ThemedBtn } from "../../styles/common.styled";
import { EmptyCart, EmptyCartImg } from "./styled";
const CartEmpty: React.FC = () => {
  return (
    <EmptyCart>
      <EmptyCartImg></EmptyCartImg>
      <Link to="/">
        <ThemedBtn width="fit-content">
             Goto shopping <Icon fontSize="25px" className="fa-solid fa-cart-plus"></Icon>
         </ThemedBtn>
      </Link>
    </EmptyCart>
  );
};
export default CartEmpty;
