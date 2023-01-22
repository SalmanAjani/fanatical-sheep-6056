import { Box } from '@chakra-ui/layout'
import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Editproduct } from '../components/Sidebar/Editproduct'
const UpdatePage = () => {
  return (
    <div>
      <AdminNavbar />
      <Box pl={[0, 240, 240]}>
        <Editproduct />
      </Box>
    </div>
  )
}

export default UpdatePage