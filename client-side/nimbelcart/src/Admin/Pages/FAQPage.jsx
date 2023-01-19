import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/layout'
import Faq from '../components/Sidebar/Faq'
import { Stats } from '../components/Sidebar/Stats'
import { PieChart } from '../components/Sidebar/PieChart'
const FAQPage = () => {
  return (
    <div><AdminNavbar/>
    <Box pl={[0,240,240]}>
      <Faq/>
      <Stats/>
      <PieChart/>
    </Box>
    </div>
  )
}

export default FAQPage