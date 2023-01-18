import * as types from "./types";
import axios from "axios";

//Get all products
export const getProduct =
  (keyword = "", gender = "", page = 1, categories = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: types.ALL_PRODUCT_REQUEST });
      const data = await axios.get(
        `https://busy-rose-earthworm-cap.cyclic.app/product?keyword=${
          keyword || ""
        }&gender=${gender || ""}&page=${page}&categories=${categories || ""}`
      );
      dispatch({ type: types.ALL_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: types.ALL_PRODUCT_ERROR,
        payload: error.response.data.message,
      });
    }
  };

//Get product details
export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.PRODUCT_DETAILS_REQUEST });
    const data = await axios.get(
      `https://busy-rose-earthworm-cap.cyclic.app/product/${id}`
    );
    dispatch({
      type: types.PRODUCT_DETAILS_SUCCESS,
      payload: data.data.product,
    });
  } catch (error) {
    dispatch({
      type: types.PRODUCT_DETAILS_ERROR,
      payload: error.response.data.message,
    });
  }
};
