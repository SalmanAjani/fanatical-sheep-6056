import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/react'
import { AvgCustomer } from '../components/Charts/AvgCustomer'
const PieChartPage = () => {
  return (
    <div>
    <AdminNavbar/>
    <Box pl={[0,240,240]}>
        <AvgCustomer/>
    </Box>
    </div>
  )
}

export default PieChartPage