import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/layout'
import { Dashboard } from '../components/Sidebar/Dashboard'





const AdminPage = () => {
  return (
    <div>
      <AdminNavbar/>
      <Box pl={[0,240,240]}>
        <Dashboard/>
      </Box>
    </div>
  )
}

export default AdminPage
