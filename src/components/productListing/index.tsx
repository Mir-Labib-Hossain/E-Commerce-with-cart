import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderValue } from "../../store/actions/loaderAction";
import { fetchProducts } from "../../store/actions/productAction";
import Loading from "../loading-page";
import ProductListingView from "./product-listing-view";

const ProductListing: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("ProductListing ");

    dispatch(setLoaderValue(20));
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state: IState) => state.productReducer.products);
  console.log();

  return Object.keys(products).length > 1 ? <ProductListingView products={products} /> :<Loading/>;
};

export default memo(ProductListing);
