import React from "react";
import { Button, Header, Row, Span } from "../../styles/common.styled";
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
        <Row>
          <Button>Add to cart | {rating.count} in stock</Button>
          <Header fontSize="18px">{rating.rate}</Header>
        </Row>
      </ProductDetails>
    </ProductDetailsWrapper>
  );
};
export default ProductDetailsView;
