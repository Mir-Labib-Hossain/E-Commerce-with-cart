 const UpdateCartData = (cart: ICartProducts, product: IProduct) => {
  const inCart = cart.find((cartProduct: any) => cartProduct.id === product.id);
  const cartProducts = inCart ? cart.map((cartProduct: any) => (cartProduct.id === product.id ? { ...cartProduct, qty: cartProduct.qty + 1 } : cartProduct)) : [...cart, { ...product, qty: 1 }];
  return cartProducts;
};
export default UpdateCartData