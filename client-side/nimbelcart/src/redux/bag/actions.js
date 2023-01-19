import { GET_DATA_SUCCESSFULLY, ADD_ITEM } from "./actionTypes";

export const getData = () => (dispatch) => {
  let dat={}
fetch(`https://odd-tan-lizard-kit.cyclic.app/cart`,{
  method:'GET',

  
  headers:{
    "Content-Type":"application/json",
    // "authorization":JSON.getItem("token")
  }
}).then((res)=>res.json).then(res=>(dat=res.carts,console.log(res))).catch((err)=>console.log(err))
console.log(dat)
  dispatch({ type: GET_DATA_SUCCESSFULLY ,payload:dat});
};

export const addtocart =(data)=> (dispatch) => {
  let dat={}
fetch(`https://odd-tan-lizard-kit.cyclic.app/cart`,{
  method:'POST',
  body:JSON.stringify(data),
  headers:{
    "Content-Type":"application/json",
    // "authorization":JSON.getItem("token")
  }
}).then((res)=>res.json).then(res=>(dat=res.carts,console.log(res))).catch((err)=>console.log(err))
// getData()
  dispatch({type:ADD_ITEM,payload:dat})
};

export const updated=(id,update)=>{
  let dat={};
  fetch(`https://odd-tan-lizard-kit.cyclic.app/cart/${id}`,{
  method:'PATCH',
  body:JSON.stringify(update),
  headers:{
    "Content-Type":"application/json",
    // "authorization":JSON.getItem("token")
  }
}).then((res)=>res.json).then(res=>(dat=res.carts,console.log(res))).catch((err)=>console.log(err))
// getData()
}
export const removed=(id)=>{
  let dat={};
  fetch(`https://odd-tan-lizard-kit.cyclic.app/cart/${id}`,{
  method:'DELETE',
 
  
  headers:{
    "Content-Type":"application/json",
    // "authorization":JSON.getItem("token")
  }
}).then((res)=>res.json).then(res=>(dat=res.carts,console.log(res))).catch((err)=>console.log(err))
// getData()
}