import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/actions/cartAction";
import { Div, Icon, Paragraph, Row, Span } from "../../styles/common.styled";
import { AddToCartBtn, CardImg, ProductCard } from "./styled";
const ProductComponentView: React.FC<IProduct> = (product) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => {console.log(product);
   dispatch(addToCart(product))
  };

  const { id, image, title, category, price } = product;
  return (
    <ProductCard>
      <Link to={`/product/${id}`}>
        <CardImg bg={image} />
      </Link>
      <Row justifyContent="space-between" alignItems="center">
        <Div>
          <Paragraph>{title}</Paragraph>
          <Row justifyContent="start" alignItems="center">
            <Span>{category} </Span>
            <Paragraph> ${price}</Paragraph>
          </Row>
        </Div>
        <AddToCartBtn onClick={addToCartHandler}>
          <Icon fontSize="13px" className="fa-solid fa-cart-plus"></Icon>
        </AddToCartBtn>
      </Row>
    </ProductCard>
  );
};
export default ProductComponentView;
