import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import Mangeproducts from '../components/Sidebar/Mangeproducts'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ADMIN_DATA } from '../../redux/app/admin/action'
export const ManageProduct = () => {
  const PRODUCTS = useSelector((state) => state.Adminreducer.adminProducts)
  const dispatch = useDispatch();
  useEffect(() => {
    if (PRODUCTS.length >= 0) {
      dispatch(GET_ADMIN_DATA())
    }
  }, [])
  return (
    <div>

      <AdminNavbar />
      <Box px={10} pl={[0, 240, 240]}>
        <Mangeproducts />
      </Box>
    </div>
  )
}
