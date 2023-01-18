import axios from "axios";
import{ ADMIN_URL } from "../../..//Utils/link";
import * as types from "./actionTypes"

// GET ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const GET_ADMIN_DATA_LOADING_fn=()=>{
    return {type: types.GET_ADMIN_DATA_REQUEST}
}
export const GET_ADMIN_DATA_SUCESS_fn=(payload)=>{
    return { type:types.GET_ADMIN_DATA_SUCESSS,payload}
}
export const GET_ADMIN_DATA_FAILURE_fn=()=>{
    return {type:types.GET_ADMIN_DATA_FAILURE}
}

// ADD ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const ADD_ADMIN_DATA_LOADING_fn=()=>{
    return {type: types.ADD_ADMIN_DATA_REQUEST}
}
export const ADD_ADMIN_DATA_SUCESS_fn=(payload)=>{
    return { type:types.ADD_ADMIN_DATA_SUCESSS,payload}
}
export const ADD_ADMIN_DATA_FAILURE_fn=()=>{
    return {type:types.ADD_ADMIN_DATA_FAILURE}
}

// EDIT ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const EDIT_ADMIN_DATA_LOADING_fn=()=>{
    return {type: types.EDIT_ADMIN_DATA_REQUEST}
}
export const EDIT_ADMIN_DATA_SUCESS_fn=(payload)=>{
    return { type:types.EDIT_ADMIN_DATA_SUCESSS,payload}
}
export const EDIT_ADMIN_DATA_FAILURE_fn=()=>{
    return {type:types.EDIT_ADMIN_DATA_FAILURE}
}

// DELETE ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const DELETE_ADMIN_DATA_LOADING_fn=()=>{
    return {type: types.DELETE_ADMIN_DATA_REQUEST}
}
export const DELETE_ADMIN_DATA_SUCESS_fn=(payload)=>{
    return { type:types.DELETE_ADMIN_DATA_SUCESSS,payload}
}
export const DELETE_ADMIN_DATA_FAILURE_fn=()=>{
    return {type:types.DELETE_ADMIN_DATA_FAILURE}
}

// SEARCH ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const SEARCH_ADMIN_DATA_LOADING_fn=()=>{
    return {type: types.ADMIN_DATA_SEARCH_REQUEST}
}
export const SEARCH_ADMIN_DATA_SUCESS_fn=(payload)=>{
    return { type:types.ADMIN_DATA_SEARCH_SUCESSS,payload}
}
export const SEARCH_ADMIN_DATA_FAILURE_fn=()=>{
    return {type:types.ADMIN_DATA_SEARCH_FAILURE}
}

// FUNCTIONS ===============================================================================================

// GET ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const GET_ADMIN_DATA =() =>(dispatch)=>{
    dispatch(GET_ADMIN_DATA_LOADING_fn());
    return axios.get(ADMIN_URL)
    .then((res)=>{dispatch(GET_ADMIN_DATA_SUCESS_fn(res.data))})
    .catch((err)=> {dispatch(GET_ADMIN_DATA_FAILURE_fn({"Error":"SomeThing Went Wrong",err}))})
}

// ADD ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const ADD_ADMIN_DATA =(payload) =>(dispatch)=>{
    dispatch(ADD_ADMIN_DATA_LOADING_fn());
    return axios.post(ADMIN_URL,payload)
    .then((res)=>{
        dispatch(ADD_ADMIN_DATA_SUCESS_fn(res.data))
        dispatch(GET_ADMIN_DATA())
    })
    .catch((err)=> {dispatch(ADD_ADMIN_DATA_FAILURE_fn({"Error":"SomeThing Went Wrong",err}))})
}

// EDIT ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const EDIT_ADMIN_DATA =(id) =>(dispatch)=>{
    dispatch(EDIT_ADMIN_DATA_LOADING_fn());
    return axios.patch(`${ADMIN_URL}/${id}`)
    .then((res)=>{
        dispatch(EDIT_ADMIN_DATA_SUCESS_fn(res.data))
        dispatch(GET_ADMIN_DATA())
    })
    .catch((err)=> {dispatch(EDIT_ADMIN_DATA_FAILURE_fn({"Error":"SomeThing Went Wrong",err}))})
}

//  DELETE ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const DELETE_ADMIN_DATA =(id) =>(dispatch)=>{
    dispatch(DELETE_ADMIN_DATA_LOADING_fn());
    return axios.delete(`${ADMIN_URL}/${id}`)
    .then((res)=>{
        dispatch(DELETE_ADMIN_DATA_SUCESS_fn(res.data))
        dispatch(GET_ADMIN_DATA())
    })
    .catch((err)=> {dispatch(DELETE_ADMIN_DATA_FAILURE_fn({"Error":"SomeThing Went Wrong",err}))})
}

//  SEARCH ADMIN DATA FUNCTION -------------------------------------------------------------------------->
export const SEARCH_ADMIN_DATA =(payload) =>(dispatch)=>{
    dispatch(SEARCH_ADMIN_DATA_LOADING_fn());
    return axios.get(ADMIN_URL,payload)
    .then((res)=>{
        dispatch(SEARCH_ADMIN_DATA_SUCESS_fn(res.data))
    })
    .catch((err)=> {dispatch(SEARCH_ADMIN_DATA_FAILURE_fn({"Error":"SomeThing Went Wrong",err}))})
}

