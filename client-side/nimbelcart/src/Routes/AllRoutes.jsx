import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Cart from '../cart/cart'

export const AllRoutes = () => {
  return (
    <div>
   <Routes>
   <Route path="/cart" element={<Cart/>}/>

   </Routes>
   </div>
  )
}
