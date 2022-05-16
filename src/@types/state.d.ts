interface IState {
  selectedProductReducer: ISelectedProductReducer;
  productReducer: IProductReducer;
  loaderReducer: ILoaderReducer;
  cartReducer: ICartReducer;
}

interface IProduct {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
  rating: IRating;
}

interface IRating {
  count: number;
  rate: number;
}

type IProducts = IProduct[];

interface IProductReducer {
  products: IProducts;
}

interface ISelectedProductReducer {
  product: IProduct;
}

interface ILoaderReducer {
  value: number;
}

interface ICartReducer {
  cart: ICartProduct[];
}

interface ICartProduct extends IProduct {
  qty: number;
}
