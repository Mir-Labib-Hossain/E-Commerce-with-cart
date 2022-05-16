import { cartReducer } from './reducers/cartReducer';
import { loaderReducer } from './reducers/loaderReducer';
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer, selectedProductReducer } from "./reducers/productReducer";


const RootReducers = combineReducers({
  cartReducer,
  productReducer,
  selectedProductReducer,
  loaderReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(RootReducers, composeEnhancers( applyMiddleware(thunk)));
 