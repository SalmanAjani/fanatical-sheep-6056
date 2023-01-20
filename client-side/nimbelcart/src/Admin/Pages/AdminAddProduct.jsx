import { Box } from '@chakra-ui/layout'
import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Addproduct } from '../components/Sidebar/Addproduct'
const AdminAddProduct = () => {
  return (
    <div>
    <AdminNavbar/>
    <Box pl={[0,240,240]}>
        <Addproduct/>
    </Box>
  </div>
  )
}

export default AdminAddProduct