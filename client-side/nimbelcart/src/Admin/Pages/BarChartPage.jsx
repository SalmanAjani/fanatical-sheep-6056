import React from 'react'
import AdminNavbar from '../Global/AdminNavbar'
import { Box, Stack } from '@chakra-ui/react'
import { ComboChart } from '../components/Charts/ComboChart'
const BarChartPage = () => {
  return (
    <div>
    <AdminNavbar/>
    <Stack
     pl={[0,240,240]} pt={[0,0,100]}>
      <ComboChart/>
    </Stack>
    </div>
  )
}

export default BarChartPage

