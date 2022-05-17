import React from "react";
import { useDispatch } from "react-redux";
import { adjustQty, removeFromCart } from "../../store/actions/cartAction";
import { CircleBtn, Icon, Paragraph, Row, Span } from "../../styles/common.styled";
import { CartImage, CartProductWrapper, DeleteProductIcon } from "./styled";
const CartProductView: React.FC<ICartProduct> = ({ id, image, title, category, description, price, qty, rating }) => {
  const dispatch = useDispatch();
  const removeProductHandler = (productId: number) => dispatch(removeFromCart(productId));
  const adjustQtyHandler = (productId: number, value: number) => dispatch(adjustQty(productId, value));
  return (
    <CartProductWrapper>
      <DeleteProductIcon onClick={() => removeProductHandler(id)} fontSize="15px" className="fa-solid fa-xmark"></DeleteProductIcon>
      <Row justifyContent="space-between" alignItems="center" width="100%">
        <Row justifyContent="space-between" alignItems="center" width="15%">
          <CartImage bg={image} />
        </Row>

        <Row justifyContent="space-between" alignItems="start" flexDirectionColumn width="50%">
          <Paragraph bold>{title}</Paragraph>
          <Span>{category}</Span>
        </Row>

        <Row justifyContent="center" alignItems="center" width="20%">
          {qty === 1 ? (
            <CircleBtn onClick={() => removeProductHandler(id)}>
              <Icon fontSize="13px" className="fa-regular fa-trash-can"></Icon>
            </CircleBtn>
          ) : (
            <CircleBtn onClick={() => adjustQtyHandler(id, -1)}>-</CircleBtn>
          )}
          <Paragraph bold>{qty}</Paragraph>
          <CircleBtn onClick={() => adjustQtyHandler(id, 1)}>+</CircleBtn>
        </Row>

        <Row justifyContent="end" alignItems="center" width="15%">
          <Paragraph bold>${(price * qty).toFixed(2)}</Paragraph>
        </Row>
      </Row>
    </CartProductWrapper>
  );
};
export default CartProductView;
