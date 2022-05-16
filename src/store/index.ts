import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducer";
import { loaderReducer } from "./reducers/loaderReducer";
import { productReducer, selectedProductReducer } from "./reducers/productReducer";

const persistConfig = {
  key: "root",
  storage,
};

const combinedPersistReducers = combineReducers({
  cartReducer,
});
const persistedReducers = persistReducer(persistConfig, combinedPersistReducers);

const RootReducers = combineReducers({
  persistedReducers,
  productReducer,
  selectedProductReducer,
  loaderReducer,
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(RootReducers, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store);
