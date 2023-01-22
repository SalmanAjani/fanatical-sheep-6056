import React from "react";
import axios from "axios";
import {
  GET_DATA_SUCCESSFULLY,
  ADD_ITEM,
  UPDATE_QUANTITY,
  REMOVE_ITEM,
} from "./actionTypes";

export const getData = () => async (dispatch) => {
  let x = JSON.parse(localStorage.getItem("user"));
  let userid = x._id;
  let data = await axios.get(
    `https://odd-tan-lizard-kit.cyclic.app/cart/${userid}`
  );

  dispatch({ type: GET_DATA_SUCCESSFULLY, payload: data.data });
};

export const updated =
  (id, { quantity }) =>
  (dispatch) => {
    let dat = {};
    fetch(`https://odd-tan-lizard-kit.cyclic.app/cart`, {
      method: "PUT",
      body: JSON.stringify({ quantity, id }),
      headers: {
        "Content-Type": "application/json",
        // "authorization":JSON.getItem("token")
      },
    })
      .then((res) => res.json())
      .then((res) => ((dat = res[0]), console.log(res)))
      .catch((err) => console.log(err));
    // getData()
    dispatch({ type: UPDATE_QUANTITY, payload: dat });
  };

export const removed = (id) => (dispatch) => {
  fetch(`https://odd-tan-lizard-kit.cyclic.app/cart`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {dispatch(getData())
         console.log("res", res)})
    .catch((err) => console.log(err));
  dispatch({ type: REMOVE_ITEM, payload: id });
};
