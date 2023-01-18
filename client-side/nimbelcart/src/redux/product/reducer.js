import * as types from "./types";
const initialState = {
  pro_loading: false,
  pro_error: false,
  products: [],
  product: [],
};

export const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.ALL_PRODUCT_REQUEST:
      return {
        ...state,
        pro_loading: true,
      };
    case types.ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        pro_loading: false,
        products: payload,
      };
    case types.ALL_PRODUCT_ERROR:
      return {
        ...state,
        pro_loading: false,
        pro_error: true,
      };
    case types.PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        pro_loading: true,
      };
    case types.PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        pro_loading: false,
        product: payload,
      };
    case types.PRODUCT_DETAILS_ERROR:
      return {
        ...state,
        pro_loading: false,
        pro_error: true,
      };
    default:
      return state;
  }
};
