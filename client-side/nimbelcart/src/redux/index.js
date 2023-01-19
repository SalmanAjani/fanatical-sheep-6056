import { combineReducers } from "redux";
import { orderReducer } from "./order/reducer";
import { authReducer } from "./auth/reducer";
import { productReducer } from "./product/reducer";
import { prodReducer } from "./products/ProdReducer";


import { cartReducer } from "./bag/cart/redux/reducer";


import{reducer as Adminreducer} from "./app/admin/reducer"


export const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  carts: cartReducer,
  orders: orderReducer,
  prodManager: prodReducer,
  Adminreducer
});
