import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSelectedProduct, removeSelectedProducts } from "../../store/actions/productAction";
import ProductDetailsView from "./product-details-view";

const ProductDetails: React.FC = () => {
  
  const { productId } = useParams();
  const dispatch = useDispatch();
  
  useEffect(() => {
    // console.log("ProductDetails");
    productId && dispatch(fetchSelectedProduct(productId));

    return () => {
      dispatch(removeSelectedProducts({}));
    };
  }, [dispatch, productId]);

  const product = useSelector((state: IState) => state.selectedProductReducer.product);

  return product && <ProductDetailsView product={product} />;
};
export default memo(ProductDetails);
