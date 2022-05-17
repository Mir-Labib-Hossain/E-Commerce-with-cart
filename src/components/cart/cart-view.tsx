import React from "react";
import { CartViewProps } from ".";
import { Paragraph, Row } from "../../styles/common.styled";
import CartEmpty from "../cartEmpty";
import { CartContainer, CartWrapper } from "./styled";
const CartView: React.FC<CartViewProps> = ({ cartProducts, totalCost }) => {
  return (
    <CartWrapper>
      {cartProducts.length > 0 ? (
        <CartContainer>
          <>{cartProducts}</>
          <hr />
          <Row justifyContent="space-between" alignItems="center" width="100%">
            <Paragraph bold>Sub total : </Paragraph>
            <Paragraph bold>${totalCost}</Paragraph>
          </Row>
        </CartContainer>
      ) : (
        <CartEmpty />
      )}
    </CartWrapper>
  );
};
export default CartView;
