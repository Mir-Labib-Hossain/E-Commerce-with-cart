import React from "react";
import { ThemedBtn, Header, Row, Span } from "../../styles/common.styled";
import { ProductDetails, ProductDetailsWrapper, ProductImg } from "./styled";
interface ProductDetailsViewProps {
  product: IProduct;
}

const ProductDetailsView: React.FC<ProductDetailsViewProps> = ({ product }) => {
  const { id, image, title, category, description, price, rating } = product;
  return (
    <ProductDetailsWrapper>
      <ProductImg bg={image} />
      <ProductDetails>
        <Header fontSize="20px">{title}</Header>
        <Span>{category}</Span>
        <Header fontSize="25px">${price}</Header>
        <Span>{description}</Span>
        <Row justifyContent="space-between" alignItems="baseline">
          <ThemedBtn width="100%">Add to cart | {rating.count} in stock</ThemedBtn>
          <Header fontSize="18px">{rating.rate}</Header>
        </Row>
      </ProductDetails>
    </ProductDetailsWrapper>
  );
};
export default ProductDetailsView;
