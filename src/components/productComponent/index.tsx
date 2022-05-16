import React, { memo, useEffect } from "react";
import ProductComponentView from "./product-component-view";

const ProductComponent: React.FC<IProduct> = ({ id, image, title, category, description, price, rating }) => {
  // useEffect(() => {
  //   console.log("ProductComponent");
  // }, []);

  return <ProductComponentView id={id} image={image} title={title} category={category} description={description} price={price} rating={rating} />;
};
export default memo(ProductComponent);
