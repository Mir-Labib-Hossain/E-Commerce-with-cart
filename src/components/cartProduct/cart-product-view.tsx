import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/actions/cartAction";
import { Button, Icon, Paragraph, Row, Span } from "../../styles/common.styled";
import { CartImage, CartProductWrapper, DeleteProductIcon } from "./styled";
const CartProductView: React.FC<ICartProduct> = ({ id, image, title, category, description, price, qty, rating }) => {
  const dispatch = useDispatch();
  const removeProduct = (productId: number) => dispatch(removeFromCart(productId));
  return (
    <CartProductWrapper>
      <DeleteProductIcon onClick={() => removeProduct(id)} fontSize="15px" className="fa-solid fa-xmark"></DeleteProductIcon>
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
            <Button>
              <Icon fontSize="13px" className="fa-regular fa-trash-can"></Icon>
            </Button>
          ) : (
            <Button>-</Button>
          )}
          <Paragraph bold>{qty}</Paragraph>
          <Button>+</Button>
        </Row>

        <Row justifyContent="end" alignItems="center" width="15%">
          <Paragraph bold>${price * qty}</Paragraph>
        </Row>
      </Row>
    </CartProductWrapper>
  );
};
export default CartProductView;
