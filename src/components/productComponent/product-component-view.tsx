import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/actions/cartAction";
import { Header, Paragraph, Span } from "../../styles/common.styled";
import { AddToCartBtn, CardImg, ProductCard } from "./styled";
const ProductComponentView: React.FC<IProduct> = (product) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => dispatch(addToCart(product));

  const { id, image, title, category, description, price, rating } = product;
  return (
    <ProductCard>
      <Link to={`/product/${id}`}>
        <CardImg bg={image} />
        <Header fontSize="20px">{title}</Header>
        <Paragraph>${price}</Paragraph>
        <Span>{category}</Span>
      </Link>
      <AddToCartBtn onClick={addToCartHandler}>Add to Cart</AddToCartBtn>
    </ProductCard>
  );
};
export default ProductComponentView;
