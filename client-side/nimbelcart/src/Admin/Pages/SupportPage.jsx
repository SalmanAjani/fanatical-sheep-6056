import { Box } from '@chakra-ui/react'
import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Support } from '../components/Sidebar/Support'
const SupportPage = () => {
  return (
    <div>

      <AdminNavbar />
      <Box pl={[0, 240, 240]}>
        <Support />
      </Box>
    </div>
  )
}

export default SupportPage
