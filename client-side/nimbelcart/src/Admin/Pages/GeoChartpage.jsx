import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box } from '@chakra-ui/react'
import { GeoChart } from '../components/Charts/GeoChart'
const GeoChartpage = () => {
  return (
    <div>
          <AdminNavbar/>
    <Box pl={[0,240,240]}>
    <GeoChart/>
    </Box>
    </div>
  )
}

export default GeoChartpage
