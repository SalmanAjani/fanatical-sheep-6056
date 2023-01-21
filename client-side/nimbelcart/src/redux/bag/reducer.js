import {
  LOADING_STATE,
  ERROR_STATE,
  GET_DATA_SUCCESSFULLY,
  ADD_ITEM,
  UPDATE_QUANTITY,
  REMOVE_ITEM,
} from "./actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: false,
};
let arr = [];
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_STATE: {
      return {
        ...state,
        loading: true,
      };
    }

    case ERROR_STATE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }

    case GET_DATA_SUCCESSFULLY: {
      return {
        error: false,
        items: action.payload,
        loading: false,
      };
    }
    case ADD_ITEM: {
      arr.push(action.payload);
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_QUANTITY: {
      let x = state.items.map((el) =>
        el._id === action.payload._id
          ? (el.quantity = action.payload.quantity)
          : el
      );
      console.log(x, "update");
      return {
        ...state,
        items: x,
      };
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        items: state.items.filter((cart) => cart._id !== action.payload.id),
      };
    }
    default: {
      return state;
    }
  }
};
