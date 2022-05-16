import React from "react";
import { Paragraph, Row } from "../../styles/common.styled";
import CartProductView from "../cartProduct/cart-product-view";
import { CartContainer, CartWrapper } from "./styled";
const CartView: React.FC<any> = ({ cartProducts }) => {
   let total = 0;
  const list = cartProducts.map(({ id, image, title, category, description, price, qty, rating }: ICartProduct, index: number) => <CartProductView key={index} id={id} image={image} title={title} category={category} description={description} price={price} qty={qty} rating={rating} />);

  return (
    <CartWrapper>
      <CartContainer>
         {list}
        <hr />
        <Row justifyContent="space-between" alignItems="center" width="100%">
          <Paragraph bold>Sub total : </Paragraph>
          <Paragraph bold>${total}</Paragraph>
        </Row>
      </CartContainer>
      ;
    </CartWrapper>
  );
};
export default CartView;
