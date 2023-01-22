import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/layout'
import Faq from '../components/Sidebar/Faq'
const FAQPage = () => {
  return (
    <div><AdminNavbar />
      <Box pl={[0, 240, 240]}>
        <Faq />
      </Box>
    </div>
  )
}

export default FAQPage