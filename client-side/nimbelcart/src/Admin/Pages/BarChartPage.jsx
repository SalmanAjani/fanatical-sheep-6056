import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/react'
import { ComboChart } from '../components/Charts/ComboChart'
const BarChartPage = () => {
  return (
    <div>
    <AdminNavbar/>
    <Box
     pl={[0,240,240]}>
      <ComboChart/>
    </Box>
    </div>
  )
}

export default BarChartPage

