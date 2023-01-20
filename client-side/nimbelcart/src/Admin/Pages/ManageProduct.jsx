import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import Mangeproducts from '../components/Sidebar/Mangeproducts'
export const ManageProduct = () => {
  return (
    <div>
        
          <AdminNavbar/>
    <Box px={10} pl={[0,240,240]}>
        <Mangeproducts/>
    </Box>
    </div>
  )
}
